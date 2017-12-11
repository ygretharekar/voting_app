import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "axios";

import { deletePoll, postVote, postAns } from "../../../reducers/poll";
import { fetchUser } from "../../../reducers/user";
import SPComp from "./SPComp";

class SinglePoll extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			poll: {},
			fetched: false
		};
		this.props.fetchUser();
	}

	
	componentDidMount() {
		axios
			.get(`/api/polls/${this.props.match.params.id}`)
			.then(
				res => this.setState(
					{
						poll: res.data,
						fetched: true
					}
				)
			)
			.catch(err => console.log(err));
	}
	
	


	render(){

		const { poll, user, deletePoll, postVote, postAns, fetchUser } = this.props;

		return(
			<SPComp 
				state = {this.state}
				deletePoll = {deletePoll}
				postVote = {postVote}
				postAns = {postAns}
				url = {this.props.match.params.id}
				poll = {poll}
				user = {user}
				fetchUser = {fetchUser}
			/>

		);
	}
}

const mapStateToProps = state => (
	{
		poll: state.poll,
		user: state.user
	}
);

SinglePoll.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape(
			{
				id: PropTypes.string.isRequired
			}
		).isRequired
	}).isRequired,


	poll: PropTypes
		.arrayOf(PropTypes.shape({
			q: PropTypes.string.isRequired,
			a: PropTypes.arrayOf(PropTypes.shape({a: PropTypes.string.isRequired, votes: PropTypes.number.isRequired}))
		}))
		.isRequired,

	user: PropTypes
		.shape({current: PropTypes.object, loggedIn: PropTypes.bool.isRequired})
		.isRequired,
	
	deletePoll: PropTypes.func.isRequired,
	postVote: PropTypes.func.isRequired,
	postAns: PropTypes.func.isRequired,
	fetchUser: PropTypes.func.isRequired,
	
};



export default connect(mapStateToProps, { deletePoll, postVote, postAns, fetchUser })(SinglePoll);