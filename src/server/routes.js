"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express2.default.Router();

router.get("/*", (req, res) => {

	const options = {
		root: `${__dirname}/../../dist/`,
		dotfiles: "deny"
	};

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

	__REACT_HOT_LOADER__.register(_default, "default", "src/serverES6/routes.js");
}();

;