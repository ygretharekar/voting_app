import { Strategy } from "passport-twitter";
import Auth from "./auth";
import User from "../models/user";


export default passport => {

	passport.serializeUser(
		(user, cb) => {
			console.log(`serialize user ${user}`);
			cb(null, user.id);
		}
	);

	passport.deserializeUser(
		(id, cb) => {
			console.log(`deserialize user ${id}`);
			User.findById(
				id,
				(err, user) => done(err, user)
			);
		}
	);


	passport.use(
		new Strategy(
			{
				consumerKey: Auth.twitterAuth.cKey,
				consumerSecret: Auth.twitterAuth.cSecret,
				callbackURL : "http://127.0.0.1:3000/auth/twitter/callback",
				passReqToCallback: true
			},
			(req, token, tokenSecret, profile, cb) => {
				process.nextTick(
					() => {
						if(!req.user){
							User.findOne(
								{
									"twitter.id": profile.id
								},
								(err, user) => {
									if(err) return cb(err);
									if(user) return cb(null, user);

									const newUser = new User();

									newUser.twitter.id = profile.id;
									newUser.twitter.token = token;
									newUser.twitter.username = profile.username;
									newUser.twitter.displayName = profile.displayName;
									
									newUser.save(
										() => {
											if(err) return cb(err);
											return cb(null, newUser); 
										}
									);
								}
							);
						} else {
							const user = req.user;
							
							user.twitter.id = profile.id;
							user.twitter.token = token;
							user.twitter.username = profile.username;
							user.twitter.displayName = profile.displayName;
							
							user.save(
								(err) => {
									if(err) return cb(err);
									return cb(null, user);
								}
							);
						}
					}
				);
			}
		)
	);
};