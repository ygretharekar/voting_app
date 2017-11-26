"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = _mongoose2.default.schema;

const answerSchema = new schema({
	a: {
		type: string,
		unique: true
	},
	votes: {
		type: number,
		default: 0
	}
});

const pollSchema = new schema({
	q: {
		type: string,
		unique: true
	},
	a: [answerSchema]
});

answerSchema.method("vote", function (vote, cb) {
	this.votes += 1;
	this.parent().save(cb);
});

const poll = _mongoose2.default.model("poll", pollSchema);

const _default = poll;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(schema, "schema", "src/serverES6/models/poll.js");

	__REACT_HOT_LOADER__.register(answerSchema, "answerSchema", "src/serverES6/models/poll.js");

	__REACT_HOT_LOADER__.register(pollSchema, "pollSchema", "src/serverES6/models/poll.js");

	__REACT_HOT_LOADER__.register(poll, "poll", "src/serverES6/models/poll.js");

	__REACT_HOT_LOADER__.register(_default, "default", "src/serverES6/models/poll.js");
}();

;