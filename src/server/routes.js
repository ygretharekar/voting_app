"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passport3 = require("./config/passport");

var _passport4 = _interopRequireDefault(_passport3);

var _poll = require("./models/poll");

var _poll2 = _interopRequireDefault(_poll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _passport4.default)(_passport2.default);

const router = _express2.default.Router();

const loggedIn = (req, res, next) => {
	if (req.user) {
		console.log(`Logged In as ${req.user}`);
		return next();
	}

	return res.status(401).json({
		error: "user not authenticated"
	});
};

//

router.param("pid", (req, res, next, id) => {
	_poll2.default.findById(id, (err, doc) => {
		if (err) return next(err);
		if (!doc) {
			err = new Error("Document is not in DB");
			err.status = 404;
			return next(err);
		}
		req.poll = doc;
		return next();
	});
});

router.param("aid", (req, res, next, id) => {
	req.a = req.poll.a[id];
	if (!req.a) {
		const err = new Error("Answer is not in DB");
		err.status = 404;
		return next(err);
	}
	return next();
});

//

router.get("/api/profile", (request, Response) => Response.json({
	user: request.user
}));

router.get("/api/polls", (request, Response) => {
	_poll2.default.find({}, (err, polls, next) => {
		if (err) return next(err);
		return Response.status(200).json(polls);
	});
});

router.post("/api/polls/new", loggedIn, (request, Response, next) => {
	let poll = new _poll2.default(request.body);
	poll.save((err, doc) => {
		if (err) return next(err);
		return Response.status(201).json(doc);
	});
});

router.get("/api/polls/:pid", (request, Response) => Response.json(request.poll));

router.post("/api/polls/:pid/new", loggedIn, (request, Response, next) => {
	request.poll.a.push(request.body);
	request.poll.save((err, doc) => {
		if (err) return next(err);
		return Response.status(201).json(doc);
	});
});

router.post("/api/polls/:pid/:aid/vote", loggedIn, (request, Response, next) => {
	request.a.vote(1, (err, doc) => {
		if (err) return next(err);
		return Response.json(doc);
	});
});

router.delete("/api/polls/:pid", loggedIn, (request, Response, next) => {
	request.poll.remove(() => {
		request.poll.save((err, doc) => {
			if (err) return next(err);
			return Response.json(doc);
		});
	});
});

router.get("/failed", (request, Response) => Response.json({
	"filure": "failed"
}));

router.get("/api/auth/twitter", _passport2.default.authenticate("twitter"));

router.get("/api/auth/twitter/callback", _passport2.default.authenticate("twitter", { failureRedirect: "/failed" }), function (req, res) {
	// Successful authentication, redirect home.
	res.redirect("/polls");
});

router.get("/*", (req, res) => {

	const options = {
		root: `${__dirname}/../../dist/`
	};
	//console.log(`dirname: ${__dirname}/../../dist/`);
	res.sendFile("index.html", options);
});

const _default = router;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(router, "router", "src/serverES6/routes.js");

	__REACT_HOT_LOADER__.register(loggedIn, "loggedIn", "src/serverES6/routes.js");

	__REACT_HOT_LOADER__.register(_default, "default", "src/serverES6/routes.js");
}();

;