import React from "react";
import PropTypes from "prop-types";
import Chart from "./Chart";
class Poll extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			chart: true
		};

		this.pollInfo = this.pollInfo.bind(this);
	}

	
	pollInfo(){
		return(
			<div className="container">
				<div id = "singleCard" className = "card text-center" > 
					<div className="card-header">
						{this.props.state.poll.q}
					</div> 
					<div className = "card-block" >
						<ul className="list-group">
							{
								this.props.state.poll.a.map(
									(a,i) => 
										<li className="list-group-item justify-content-between" key={i}>
											{a.a}
											<span className="badge badge-default badge-pill">
												vote
											</span>
										</li>
								)
							}
						</ul> 
					</div>
					<div className="card-footer text-muted">
						<div className="btn-group" data-toggle="buttons">
							<label className="btn btn-secondary btn-sm">
								<input type="radio" name="options" />
								Back to Polls
							</label>
							<label className="btn btn-secondary btn-sm">
								<input type="radio" name="options" />
								Delete Polls
							</label>
						</div>
					</div>
				</div>
				<Chart poll={this.props.state.poll} />
			</div>
		);
	}


	render(){
		return(
			<div>
				{this.pollInfo()}
			</div>
		);
	}

}

export default Poll;