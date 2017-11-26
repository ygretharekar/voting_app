import express from "express";
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import session from "express-session";
import MongoStore from "connect-mongo";

import routes from '../routes';
import db from "./database";

import fs from 'fs';
import path from 'path';

const dev = process.env.NODE_ENV === 'development';
const dist = process.env.NODE_ENV === 'production';

const mongoConnect = MongoStore(session);

export default app => {

    if(dev){
        // const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs','access.log'), {flags: 'a'});
        app.use(morgan('dev'));
    }


    if(dist){
        app.use(compression());
        app.use(helmet());
    }

    app.use(express.static('dist'));

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

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    
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

    app.use('/', routes);
};