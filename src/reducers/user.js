import axios from "axios";

//Actions

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const FETCH_USER = "FETCH_USER";

//ActionCreators

export const login = user => (
	{
		type: LOGIN,
		user
	}
);

export const logout = user => (
	{
		type: LOGOUT,
		user
	}
);

export const getUser = user => (
	{
		type:FETCH_USER,
		user
	}
);

//Async actions

export const fetchUser = 
	() =>
		dispatch =>
			axios
				.get("/api/profile")
				.then(res => dispatch(getUser(res.data.user)))
				.catch(err => console.warn(err));

export const logoutUser = 
	() => 
		dispatch =>
			axios
				.get("/api/logout")
				.then(res => dispatch(logout(res.data.user)))
				.catch(err => console.warn(err));

// reducer

export default (state={}, action) => {
	switch(action.type){
	case FETCH_USER:{
		const t = () => {
			if(action.user === undefined) return false;
			return true;
		};

		return {
			current: action.user,
			loggedIn: t()
		};
	}

	case LOGIN:
		return {
			...state,
			...action.user,
			loggedIn: true
		};

	case LOGOUT:
		return {
			...state,
			loggedIn: false
		};

	default:
		return state;
	}
};