import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { updateVotes, addPoll, fetchPolls, postPoll } from "../../reducers/poll";
import { fetchUser } from "../../reducers/user";
import AddPoll from "./addPoll";

class Polls extends React.Component {

	constructor(props){
		super(props);
		this.props.fetchPolls();
		this.props.fetchUser();
	}

	componentDidMount() {
		this.props.fetchPolls();
	}

	componentWillMount = () => {
		this.props.fetchPolls();
	}
	

	render(){

		const { poll, user, postPoll, fetchPolls } = this.props;

		return(
			<div className="d-flex flex-column justify-content-center" id="polls">
				{
					poll.map(
						(p, i) => 
							<div id="qs" className="card" key={i}>
								<Link to = {`/polls/${p._id}`}>
									<div className="card-block">
										<h4>
											{p.q}
										</h4>
									</div>
								</Link>
							</div>
					)
				}
				<div className="d-flex flex-row justify-content-center">
					<button className="btn btn-primary" type="button" data-toggle="modal" data-target="#exampleModal">
						Add Poll
					</button>
					<AddPoll postPoll = {postPoll} fetchPolls={fetchPolls} poll = {poll} />
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