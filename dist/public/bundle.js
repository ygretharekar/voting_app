/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(5);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _store = __webpack_require__(11);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import App from "./client/index";

_reactDom2.default.render(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store2.default },
	_react2.default.createElement(_index2.default, null)
), document.getElementById("root"));
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}
}();

;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\My Work\\Voting_App\\src\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\My Work\\Voting_App\\src\\index.js"); } } })();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _header = __webpack_require__(7);

var _header2 = _interopRequireDefault(_header);

var _sidenav = __webpack_require__(8);

var _sidenav2 = _interopRequireDefault(_sidenav);

var _footer = __webpack_require__(10);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.Component {
	render() {
		return _react2.default.createElement(
			_reactRouterDom.BrowserRouter,
			null,
			_react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(_header2.default, null),
				_react2.default.createElement(_sidenav2.default, null),
				_react2.default.createElement(_footer2.default, null)
			)
		);
	}
}

const _default = App;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(App, "App", "C:/My Work/Voting_App/src/client/index.js");

	__REACT_HOT_LOADER__.register(_default, "default", "C:/My Work/Voting_App/src/client/index.js");
}();

;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\My Work\\Voting_App\\src\\client\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\My Work\\Voting_App\\src\\client\\index.js"); } } })();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Header extends _react2.default.Component {

	openNav() {
		document.getElementById("mySidenav").style.width = "250px";
	}

	render() {
		return _react2.default.createElement(
			"header",
			null,
			_react2.default.createElement(
				"nav",
				{ className: "navbar navbar-dark navbar-expand flex-row" },
				_react2.default.createElement(
					"span",
					{ className: "navbar-brand h4" },
					"Voting App"
				),
				_react2.default.createElement(
					"div",
					{ id: "user" },
					_react2.default.createElement(
						"span",
						{ className: "h5", id: "username" },
						"Visitor"
					),
					_react2.default.createElement(
						"button",
						{ type: "button", className: "btn btn-dark", onClick: this.openNav },
						"Login"
					)
				)
			)
		);
	}
}
exports.default = Header;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Header, "Header", "C:/My Work/Voting_App/src/client/components/header.js");
}();

;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\My Work\\Voting_App\\src\\client\\components\\header.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\My Work\\Voting_App\\src\\client\\components\\header.js"); } } })();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _login = __webpack_require__(9);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Sidenav extends _react2.default.Component {

	componentDidMount() {}

	closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}

	render() {

		return _react2.default.createElement(
			"div",
			{ id: "mySidenav", className: "sidenav" },
			_react2.default.createElement(
				"a",
				{ href: "javascript:void(0)", className: "closebtn", onClick: this.closeNav },
				"\xD7"
			),
			_react2.default.createElement(_login2.default, null)
		);
	}

}
exports.default = Sidenav;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Sidenav, "Sidenav", "C:/My Work/Voting_App/src/client/components/sidenav.js");
}();

;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\My Work\\Voting_App\\src\\client\\components\\sidenav.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\My Work\\Voting_App\\src\\client\\components\\sidenav.js"); } } })();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Login = props => {
	return _react2.default.createElement(
		"a",
		{ className: "btn btn-outline-primary",
			href: "/api/auth/twitter/callback" },
		"Twitter Login"
	);
};

const _default = Login;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Login, "Login", "C:/My Work/Voting_App/src/client/components/login.js");

	__REACT_HOT_LOADER__.register(_default, "default", "C:/My Work/Voting_App/src/client/components/login.js");
}();

;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\My Work\\Voting_App\\src\\client\\components\\login.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\My Work\\Voting_App\\src\\client\\components\\login.js"); } } })();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _default = () => {
	return _react2.default.createElement(
		"footer",
		{ className: "footer" },
		_react2.default.createElement(
			"nav",
			{ className: "navbar fixed-bottom navbar-light bg-faded" },
			_react2.default.createElement(
				"a",
				{ className: "navbar-brand", href: "#" },
				"FreeCodeCamp Voting App"
			)
		)
	);
};

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, "default", "C:/My Work/Voting_App/src/client/components/footer.js");
}();

;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\My Work\\Voting_App\\src\\client\\components\\footer.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\My Work\\Voting_App\\src\\client\\components\\footer.js"); } } })();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduxThunk = __webpack_require__(12);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(13);

var _poll = __webpack_require__(14);

var _poll2 = _interopRequireDefault(_poll);

var _user = __webpack_require__(15);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialState = {
	polls: [],
	user: {
		current: {},
		loggedIn: false
	}
};

const reducer = (0, _redux.combineReducers)({
	poll: _poll2.default,
	user: _user2.default
});

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

const store = (0, _redux.createStore)(reducer, initialState, enhancer((0, _redux.applyMiddleware)(_reduxThunk2.default)));

const _default = store;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(initialState, "initialState", "C:/My Work/Voting_App/src/store.js");

	__REACT_HOT_LOADER__.register(reducer, "reducer", "C:/My Work/Voting_App/src/store.js");

	__REACT_HOT_LOADER__.register(enhancer, "enhancer", "C:/My Work/Voting_App/src/store.js");

	__REACT_HOT_LOADER__.register(store, "store", "C:/My Work/Voting_App/src/store.js");

	__REACT_HOT_LOADER__.register(_default, "default", "C:/My Work/Voting_App/src/store.js");
}();

;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\My Work\\Voting_App\\src\\store.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\My Work\\Voting_App\\src\\store.js"); } } })();

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.postVote = exports.postAns = exports.postPoll = exports.fetchPolls = exports.updateVotes = exports.deletePoll = exports.editPolls = exports.addPoll = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Actions

const FETCH_POLLS = "FETCH_POLLS";
const EDIT_POLLS = "EDIT_POLLS";
const ADD_POLLS = "ADD_POLLS";
const DELETE_POLLS = "DELETE_POLLS";
const UPDATE_VOTES = "UPDATE_VOTES";

//ActionCreators

const addPoll = exports.addPoll = (q, a) => ({
	type: ADD_POLLS,
	q,
	a
});

const editPolls = exports.editPolls = (ind, a) => ({
	type: EDIT_POLLS,
	ind,
	a
});

const deletePoll = exports.deletePoll = ind => ({
	type: DELETE_POLLS,
	ind
});

const updateVotes = exports.updateVotes = (qind, aind, votes) => ({
	type: UPDATE_VOTES,
	qind,
	aind,
	votes
});

const getPolls = polls => ({
	type: FETCH_POLLS,
	polls
});

//Async calls

const fetchPolls = exports.fetchPolls = () => dispatch => _axios2.default.get("/api/polls").then(res => dispatch(getPolls(res.data))).catch(err => console.warn(err));

const postPoll = exports.postPoll = (q, a) => dispatch => _axios2.default.post("/api/polls/new", addPoll(q, a)).then(dispatch(addPoll(q, a))).catch(err => console.warn(err));

const postAns = exports.postAns = (url, ind, ans) => dispatch => _axios2.default.post(`/api/polls/${url}/new`, { a: ans[0].ans, votes: 1 }).then(dispatch(editPolls(ind, ans))).catch(err => console.warn(err));

const postVote = exports.postVote = (url, aind, qind, votes) => dispatch => _axios2.default.post(`/api/polls/${url}/${aind}/vote`).then(dispatch(updateVotes(qind, aind, votes))).catch(err => console.warn(err));

// reducer

const _default = (state = [], action) => {
	switch (action.type) {
		case FETCH_POLLS:
			return action.polls;

		case ADD_POLLS:
			return [...state, {
				q: action.q,
				a: action.a
			}];

		case EDIT_POLLS:
			{
				const editedPoll = state.map((poll, ind) => {
					if (ind == action.qind) {
						return _extends({}, poll, {
							a: poll.a.concat(action.a)
						});
					}
				});
				return editedPoll;
			}

		case DELETE_POLLS:
			{
				const deletedPoll = [...state.slice(0, action.ind), ...state.slice(action.ind + 1)];

				return deletedPoll;
			}

		case UPDATE_VOTES:
			{
				const updatedVotes = state.map((poll, ind) => {
					if (ind === action.qind) {
						return _extends({}, poll, {
							a: poll.a.map((a, ind) => {
								if (ind === action.aind) {
									return _extends({}, a, {
										votes: a.votes + action.votes
									});
								}
								return a;
							})
						});
					}
					return poll;
				});

				return updatedVotes;
			}

		default:
			return state;
	}
};

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(FETCH_POLLS, "FETCH_POLLS", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(EDIT_POLLS, "EDIT_POLLS", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(ADD_POLLS, "ADD_POLLS", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(DELETE_POLLS, "DELETE_POLLS", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(UPDATE_VOTES, "UPDATE_VOTES", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(addPoll, "addPoll", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(editPolls, "editPolls", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(deletePoll, "deletePoll", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(updateVotes, "updateVotes", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(getPolls, "getPolls", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(fetchPolls, "fetchPolls", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(postPoll, "postPoll", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(postAns, "postAns", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(postVote, "postVote", "C:/My Work/Voting_App/src/reducers/poll.js");

	__REACT_HOT_LOADER__.register(_default, "default", "C:/My Work/Voting_App/src/reducers/poll.js");
}();

;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\My Work\\Voting_App\\src\\reducers\\poll.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\My Work\\Voting_App\\src\\reducers\\poll.js"); } } })();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.logoutUser = exports.fetchUser = exports.getUser = exports.logout = exports.login = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Actions

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const FETCH_USER = "FETCH_USER";

//ActionCreators

const login = exports.login = user => ({
	type: LOGIN,
	user
});

const logout = exports.logout = user => ({
	type: LOGOUT,
	user
});

const getUser = exports.getUser = user => ({
	type: FETCH_USER,
	user
});

//Async actions

const fetchUser = exports.fetchUser = () => dispatch => _axios2.default.get("/api/profile").then(res => dispatch(getUser(res.data.user))).catch(err => console.warn(err));

const logoutUser = exports.logoutUser = () => dispatch => _axios2.default.get("/api/logout").then(res => dispatch(logout(res.data.user))).catch(err => console.warn(err));

// reducer

const _default = (state = {}, action) => {
	switch (action.type) {
		case FETCH_USER:
			{
				const t = () => {
					if (action.user === undefined) return false;
					return true;
				};

				return {
					current: action.user,
					loggedIn: t()
				};
			}

		case LOGIN:
			return _extends({}, state, action.user, {
				loggedIn: true
			});

		case LOGOUT:
			return _extends({}, state, {
				loggedIn: false
			});

		default:
			return state;
	}
};

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(LOGIN, "LOGIN", "C:/My Work/Voting_App/src/reducers/user.js");

	__REACT_HOT_LOADER__.register(LOGOUT, "LOGOUT", "C:/My Work/Voting_App/src/reducers/user.js");

	__REACT_HOT_LOADER__.register(FETCH_USER, "FETCH_USER", "C:/My Work/Voting_App/src/reducers/user.js");

	__REACT_HOT_LOADER__.register(login, "login", "C:/My Work/Voting_App/src/reducers/user.js");

	__REACT_HOT_LOADER__.register(logout, "logout", "C:/My Work/Voting_App/src/reducers/user.js");

	__REACT_HOT_LOADER__.register(getUser, "getUser", "C:/My Work/Voting_App/src/reducers/user.js");

	__REACT_HOT_LOADER__.register(fetchUser, "fetchUser", "C:/My Work/Voting_App/src/reducers/user.js");

	__REACT_HOT_LOADER__.register(logoutUser, "logoutUser", "C:/My Work/Voting_App/src/reducers/user.js");

	__REACT_HOT_LOADER__.register(_default, "default", "C:/My Work/Voting_App/src/reducers/user.js");
}();

;

 ;(function register() { /* react-hot-loader/webpack */ if (process.env.NODE_ENV !== 'production') { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\My Work\\Voting_App\\src\\reducers\\user.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\My Work\\Voting_App\\src\\reducers\\user.js"); } } })();

/***/ })
/******/ ]);