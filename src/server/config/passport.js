'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passportTwitter = require('passport-twitter');

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _default = passport => {
    passport.use(new _passportTwitter.strategy({
        consumerKey: _auth2.default.twitterAuth.cKey,
        consumerSecret: _auth2.default.twitterAuth.cSecret,
        callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback',
        passReqToCallback: true
    }, (req, token, tokenSecret, profile, cb) => cb(null, profile)));
    passport.serializeUser((user, cb) => cb(null, user));

    passport.deserializeUser((obj, cb) => cb(null, obj));
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/serverES6/config/passport.js');
}();

;