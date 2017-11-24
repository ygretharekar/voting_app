import axios from "axios";

//Actions

const FETCH_POLLS = "FETCH_POLLS";
const EDIT_POLLS = "EDIT_POLLS";
const ADD_POLLS = "ADD_POLLS";
const DELETE_POLLS = "DELETE_POLLS";
const UPDATE_VOTES = "UPDATE_VOTES";

//ActionCreators

export const addPoll = (q, a) => (
	{
		type: ADD_POLLS,
		q,
		a
	}
);

export const editPolls = (ind, a) => (
	{
		type: EDIT_POLLS,
		ind,
		a
	}
);

export const deletePoll = ind => (
	{
		type: DELETE_POLLS,
		ind
	}
);

export const updateVotes = (qind, aind, votes) => (
	{
		type: UPDATE_VOTES,
		qind,
		aind,
		votes
	}
);

const getPolls = polls => (
	{
		type: FETCH_POLLS,
		polls
	}
);

//Async calls

export const fetchPolls = 
	() => 
		dispatch => 
			axios
				.get("/api/polls")
				.then(res => dispatch(getPolls(res.data)))
				.catch(err => console.warn(err));

export const postPoll = 
	(q, a) => 
		dispatch => 
			axios
				.post("/api/polls/new", addPoll(q, a))
				.then(dispatch(addPoll(q,a)))
				.catch(err => console.warn(err));

export const postAns = 
	(url, ind, ans) =>
		dispatch =>
			axios
				.post(`/api/polls/${url}/new`, {a: ans[0].ans, votes: 1})
				.then(dispatch(editPolls(ind, ans)))
				.catch(err => console.warn(err));

export const postVote =
	(url, aind, qind, votes) =>
		dispatch =>
			axios
				.post(`/api/polls/${url}/${aind}/vote`)
				.then(dispatch(updateVotes(qind, aind, votes)))
				.catch(err => console.warn(err));

// reducer

export default (state = [], action) => {
	switch(action.type){
	case FETCH_POLLS:
		return action.polls;

	case ADD_POLLS:
		return [
			...state,
			{
				q: action.q,
				a: action.a
			}
		];
	
	case EDIT_POLLS:{
		const editedPoll = state.map(
			(poll, ind) => {
				if(ind == action.qind){
					return {
						...poll,
						a: poll.a.concat(action.a) 
					};
				}
			}
		);
		return editedPoll;
	}

	case DELETE_POLLS:{
		const deletedPoll = [
			...state.slice(0, action.ind),
			...state.slice(action.ind + 1)
		];

		return deletedPoll;
	}

	case UPDATE_VOTES:{
		const updatedVotes = state.map(
			(poll, ind) => {
				if(ind === action.qind){
					return {
						...poll,
						a: poll.a.map(
							(a, ind) => {
								if(ind === action.aind){
									return {
										...a,
										votes: a.votes + action.votes
									};
								}
								return a;
							}
						)
					};
				}
				return poll;
			}
		);

		return updatedVotes;
	}

	default:
		return state;
	}
};

