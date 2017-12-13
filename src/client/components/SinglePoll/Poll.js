import React from "react";
import Chart from "./Chart";
import {Link} from "react-router-dom";

import NewAnswer from "./newAnswer";

class Poll extends React.Component {

	constructor(props){
		super(props);

		this.pollInfo = this.pollInfo.bind(this);	
	}
	
	componentWillMount() {
		
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
											<span 
												className="badge badge-default badge-pill" 
												onClick = { 
													() => 
														this.props.postVote(
															this.props.url, 
															i, 
															this.props.poll.findIndex(q => q._id === this.props.url),
															1
														)
												}
											>
												vote here
											</span>
										</li>
								)
							}
						</ul>
					</div>
					<div className="card-footer text-muted d-flex justify-content-between">
						<Link 
							to="/polls"
							className="btn btn-danger btn-sm" 
						>
							Back to polls
						</Link>
						<div className="btn-group">
							<a className="btn btn-secondary btn-sm" href="https://twitter.com/share">
								Share Poll
							</a>
							<button className="btn btn-secondary btn-sm" type="button" data-toggle="modal" data-target="#addAModal">
								Add Poll
							</button>
							<button className="btn btn-secondary btn-sm" type="button" data-toggle="modal" data-target="#chartModal">
								Show chart
							</button>
						</div>
						<Link
							to = "/polls" 
							className="btn btn-danger btn-sm"
							onClick = { () => this.props.deletePoll(this.props.poll.findIndex(e => e._id === this.props.url), this.props.url)}
						>
							Delete Polls
						</Link>
						
					</div>
				</div>
				<NewAnswer
					poll = {this.props.state.poll}
					postAns = {this.props.postAns}
					postVote = {this.props.postVote}
					url = {this.props.url}
					polls = {this.props.poll}
				/>
			</div>
		);
	}

	render(){
		return(
			<div>
				{this.pollInfo()}
				<div className="container">
					<Chart  poll = {this.props.state.poll} />
				</div>
			</div>
		);
	}
}

export default Poll;