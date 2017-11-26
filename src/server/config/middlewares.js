'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _connectMongo = require('connect-mongo');

var _connectMongo2 = _interopRequireDefault(_connectMongo);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dev = process.env.NODE_ENV === 'development';
const dist = process.env.NODE_ENV === 'production';

const mongoConnect = (0, _connectMongo2.default)(_expressSession2.default);

const _default = app => {

    if (dev) {
        // const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs','access.log'), {flags: 'a'});
        app.use((0, _morgan2.default)('dev'));
    }

    if (dist) {
        app.use((0, _compression2.default)());
        app.use((0, _helmet2.default)());
    }

    app.use(_express2.default.static('dist'));

    app.use((0, _expressSession2.default)({
        secret: "secret1",
        name: "session",
        resave: true,
        saveUninitialized: true,
        store: new mongoConnect({
            mongooseConnection: _database2.default
        })
    }));

    app.use(_bodyParser2.default.json());
    app.use(_bodyParser2.default.urlencoded({ extended: true }));

    app.use((err, reg, res, next) => {
        res.status(err.status || 500).json({
            error: {
                message: err.message
            }
        });
        next(err);
    });

    app.use('/', _routes2.default);
};

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(dev, 'dev', 'src/serverES6/config/middlewares.js');

    __REACT_HOT_LOADER__.register(dist, 'dist', 'src/serverES6/config/middlewares.js');

    __REACT_HOT_LOADER__.register(mongoConnect, 'mongoConnect', 'src/serverES6/config/middlewares.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/serverES6/config/middlewares.js');
}();

;