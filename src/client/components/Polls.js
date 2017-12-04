import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateVotes, addPoll, fetchPolls, postPoll } from "../../reducers/poll";
import { fetchUser } from "../../reducers/user";
import AddPoll from "./addPoll";

class Polls extends React.Component {

	constructor(props){
		super(props);
		this.props.fetchPolls();
		this.props.fetchUser();
	}

	render(){

		const { poll, user, postPoll } = this.props;

		return(
			<div className="d-flex flex-column justify-content-center" id="polls">
				{
					poll.map(
						p => 
							<div className="card">
								<div className="card-block">
									<h2>
										{p.q}
									</h2>
								</div>
							</div>
					)
				}
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
		poll: state.poll,
		user: state.user
	}
);

Polls.propTypes = {
	poll: PropTypes.arrayOf(
		PropTypes.shape(
			{
				q: PropTypes.string.isRequired,
				a: PropTypes.arrayOf(
					PropTypes.shape(
						{
							a: PropTypes.string.isRequired,
							votes: PropTypes.number.isRequired
						}
					)
				)
			}
		)
	).isRequired, 
	user: PropTypes.shape(
		{
			current: PropTypes.object,
			loggedIn: PropTypes.bool.isRequired
		}
	).isRequired
};


export default connect(mapStateToProps, { fetchPolls, fetchUser, updateVotes, addPoll, postPoll })(Polls);