import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';

import routes from '../routes';

import fs from 'fs';
import path from 'path';

const dev = process.env.NODE_ENV === 'development';
const dist = process.env.NODE_ENV === 'production';

export default app => {

    if(dev){
        // const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs','access.log'), {flags: 'a'});
        app.use(morgan('dev'));
    }


    if(dist){
        app.use(compression());
        app.use(helmet());
    }

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