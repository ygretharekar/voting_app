"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get("/*", (req, res) => {

	const options = {
		root: `${__dirname}/../../dist/`
	};
	//console.log(`dirname: ${__dirname}/../../dist/`);
	res.sendFile("index.html", options);
});

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

router.param("pid", (req, res, next, id) => {});

//

router.get("/api/auth/twitter", _passport2.default.authenticate("twitter"));

router.get("/api/auth/twitter/callback", _passport2.default.authenticate("twitter", {
	successRedirect: "/polls",
	failureRedirect: "/"
}));

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