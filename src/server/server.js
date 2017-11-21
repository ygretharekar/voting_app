"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

require("./config/database");

var _middlewares = require("./config/middlewares");

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

(0, _middlewares2.default)(app);

app.get("/", (req, res) => {
	res.send("working...!!");
});

app.listen(process.env.PORT || 3000, err => {
	if (err) throw err;
});
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(app, "app", "src/serverES6/server.js");
}();

;