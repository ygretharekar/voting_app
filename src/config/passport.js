import { strategy } from 'passport-twitter';
import Auth from "./auth";


export default passport => {
    passport.use(
        new strategy(
            {
                consumerKey: Auth.twitterAuth.cKey,
                consumerSecret: Auth.twitterAuth.cSecret,
                callbackURL : 'http://127.0.0.1:3000/auth/twitter/callback',
                passReqToCallback: true
            },
            (req, token, tokenSecret, profile, cb) => cb(null, profile)
        )
    );
    passport.serializeUser((user, cb) => cb(null, user));

    passport.deserializeUser((obj, cb) => cb(null, obj));
};