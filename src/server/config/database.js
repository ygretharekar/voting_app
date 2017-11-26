'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.COLLECTION}`;

_mongoose2.default.Promise = global.Promise;

try {
    _mongoose2.default.connect(uri);
} catch (err) {
    _mongoose2.default.createConnection(uri);
}

const db = _mongoose2.default.connection;

db.once('open', () => {
    console.log('MongoDB is connected!');
}).on('error', err => {
    throw err;
});

//
const _default = db;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(uri, 'uri', 'src/serverES6/config/database.js');

    __REACT_HOT_LOADER__.register(db, 'db', 'src/serverES6/config/database.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'src/serverES6/config/database.js');
}();

;