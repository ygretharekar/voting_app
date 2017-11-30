import express from "express";
import passport from "passport";

import passportConfig from "./config/passport";

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