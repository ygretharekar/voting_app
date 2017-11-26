"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _passportTwitter = require("passport-twitter");

var _auth = require("./auth");

var _auth2 = _interopRequireDefault(_auth);

var _user = require("../models/user");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _default = passport => {

	passport.serializeUser((user, cb) => {
		console.log(`serialize user ${user}`);
		cb(null, user.id);
	});

	passport.deserializeUser((id, cb) => {
		console.log(`deserialize user ${id}`);
		_user2.default.findById(id, (err, user) => done(err, user));
	});

	passport.use(new _passportTwitter.Strategy({
		consumerKey: _auth2.default.twitterAuth.cKey,
		consumerSecret: _auth2.default.twitterAuth.cSecret,
		callbackURL: "http://127.0.0.1:3000/auth/twitter/callback",
		passReqToCallback: true
	}, (req, token, tokenSecret, profile, cb) => {
		process.nextTick(() => {
			if (!req.user) {
				_user2.default.findOne({
					"twitter.id": profile.id
				}, (err, user) => {
					if (err) return cb(err);
					if (user) return cb(null, user);

					const newUser = new _user2.default();

					newUser.twitter.id = profile.id;
					newUser.twitter.token = token;
					newUser.twitter.username = profile.username;
					newUser.twitter.displayName = profile.displayName;

					newUser.save(() => {
						if (err) return cb(err);
						return cb(null, newUser);
					});
				});
			} else {
				const user = req.user;

				user.twitter.id = profile.id;
				user.twitter.token = token;
				user.twitter.username = profile.username;
				user.twitter.displayName = profile.displayName;

				user.save(err => {
					if (err) return cb(err);
					return cb(null, user);
				});
			}
		});
	}));
};

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, "default", "src/serverES6/config/passport.js");
}();

;