import express from "express";
import passport from "passport";

import passportConfig from "./config/passport";
import Poll from "./models/poll";

passportConfig(passport);

const router = express.Router();


const loggedIn = (req, res, next) => {
	if(req.user){
		console.log(`Logged In as ${req.user}`);
		return next();
	}

	return res.status(401).json(
		{
			error: "user not authenticated"
		}
	);
};

//

router.param(
	"pid",
	(req, res, next, id) => {
		Poll.findById(
			id, 
			(err, doc) => {
				if(err) return next(err);
				if(!doc) {
					err = new Error("Document is not in DB");
					err.status = 404;
					return next(err);
				}
				req.poll = doc;
				return next();
			}
		);
	}
);



router.param(
	"aid",
	(req, res, next, id) => {
		req.a = req.poll.a[id];
		if(!req.answer){
			const err = new Error("Document is not in DB");
			err.status = 404;
			return next(err);
		}
		return next();
	}
);


//

router.get(
	"/api/profile",
	(request, Response) => Response.json(
		{
			user: request.user
		}
	)
);
router.get(
	"/api/polls",
	(request, Response) => {
		Poll.find(
			{},
			(err, polls, next) => {
				if(err) return next(err);
				return Response.status(200).json(polls);
			}
		);
	}
);


router.post(
	"/api/polls/new",
	loggedIn,
	(request, Response, next) => {
		let poll = new Poll(request.body);
		poll.save(
			(err, doc) => {
				if(err) return next(err);
				return Response.status(201).json(doc);
			}
		);
	}
);
 
router.get(
	"/api/polls/:pid",
	(request, Response) => Response.json(request.poll)
);

router.post(
	"/api/polls/:pid/new",
	loggedIn,
	(request, Response, next) => {
		request.poll.a.push(request.body);
		request.poll.save(
			(err, doc) => {
				if(err) return next(err);
				return Response.status(201).json(doc);

			}
		);
	}
);

router.post(
	"/api/polls/:pid/:aid/vote",
	loggedIn,
	(request, Response, next) => {
		request.a.vote(
			request.vote,
			(err, doc) => {
				if(err) return next(err);
				return Response.json(doc);
			}
		);
	}
);


router.get(
	"/failed",
	(request, Response) => Response.json({
		"filure": "failed"
	})
);

router.get(
	"/api/auth/twitter",
	passport.authenticate("twitter")
);

router.get(
	"/api/auth/twitter/callback",
	passport.authenticate("twitter", { failureRedirect: "/failed" }),
	function(req, res) {
		// Successful authentication, redirect home.
		res.redirect("/polls");
	}
);

router.get(
	"/*",
	(req, res) => {

		const options = {
			root : `${__dirname}/../../dist/`
		};
		//console.log(`dirname: ${__dirname}/../../dist/`);
		res.sendFile("index.html", options);
	}
);

export default router;