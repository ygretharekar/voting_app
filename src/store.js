import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import poll from "./reducers/poll";
import user from "./reducers/user";

const initialState = {
	polls:[],
	user:{
		current:{},
		loggedIn:false
	}
};

const reducer = combineReducers(
	{
		poll,
		user
	}
);

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	enhancer(applyMiddleware(thunk))
);

export default store;