import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import session from "express-session";
import MongoStore from "connect-mongo";
import passport from "passport";

import routes from "../routes";
import db from "./database";
import passportConfig from "./passport";

// import fs from "fs";
// import path from "path";

// const dev = process.env.NODE_ENV === "development";
const dist = process.env.NODE_ENV === "production";

const mongoConnect = MongoStore(session);
passportConfig(passport);

export default app => {

	if(dist){
		app.use(compression());
		app.use(helmet());
	}

	app.use(express.static("dist"));
    
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
    

	app.use(
		session(
			{
				secret: "secret1",
				name: "session",
				resave: true,
				saveUninitialized: true,
				store: new mongoConnect(
					{
						mongooseConnection: db
					}
				)
			}
		)
	);

	app.use(passport.initialize());
	app.use(passport.session());

	app.use("/", routes);

	app.use((err, reg, res, next) => {
		res
			.status(err.status || 500)
			.json({
				error: {
					message: err.message
				}
			});
		next(err);
	});
    
};