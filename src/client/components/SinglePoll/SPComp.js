import React from "react";
import PropTypes from "prop-types";

import Poll from "./Poll";

const SPComp = props => {

	let chart = true;

	const seeChart = chart => {
		chart = !chart;
		return chart;
	};

	const condRender = () => {
		if(props.state.fetched){
			return(
				<div>
					<Poll
						state = {props.state}
						seeChart = {seeChart}
						chart = {chart}
					/>
				</div>
			);
		}
		return(
			<h1>
				Loading....
			</h1>
		);
	};
	
	return(
		<div className="d-flex justify-content-center">
			{condRender()}
		</div>
	);
};

/* SPComp.propTypes = {

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
	fetchUser: PropTypes.func.isRequired	
}; */



export default SPComp;