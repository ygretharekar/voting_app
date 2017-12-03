import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateVotes, addPoll, fetchPolls, postPoll } from "../../reducers/poll";
import { fetchUser } from "../../reducers/user";
import AddPoll from "./addPoll";

class Polls extends React.Component {

	constructor(props){
		super(props);
		this.props.fetchUser();
	}

	render(){

		const { poll, user } = this.props;

		return(
			<div className="d-flex flex-column justify-content-center" id="polls">
				<div className="d-flex flex-row justify-content-center">
					<button className="btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModal">
						Add Poll
					</button>
					<AddPoll postPoll = {postPoll} poll = {poll} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		...state
	}
);

Polls.propTypes = {
	/* polls: PropTypes.arrayOf(
		PropTypes.shape(
			{
				question: PropTypes.string.isRequired,
				answer: PropTypes.arrayOf(
					PropTypes.shape(
						{
							answer: PropTypes.string.isRequired,
							votes: PropTypes.number.isRequired
						}
					)
				)
			}
		)
	).isRequired, */
	user: PropTypes.shape(
		{
			current: PropTypes.object,
			loggedIn: PropTypes.bool.isRequired
		}
	).isRequired
};


export default connect(mapStateToProps, { fetchPolls, fetchUser, updateVotes, addPoll, postPoll })(Polls);