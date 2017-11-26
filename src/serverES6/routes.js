import express from "express";
import passport from "passport";


const router = express.Router();

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
	"failed",
	(request, Response) => Response.json({
		"filure": "failure"
	})
);

router.get(
	"/api/auth/twitter",
	passport.authenticate("twitter")
);

router.get(
	"/api/auth/twitter/callback",
	passport.authenticate(
		"twitter",
		{
			successRedirect: "/",
			failureRedirect: "/failed" 
		}
	)
);

export default router;