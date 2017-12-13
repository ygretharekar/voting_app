import React from "react";
import PropTypes from "prop-types";

const NewPoll = props => {
	let ans = props.state.a;
	let answer = "";

	return(
		<div className="modal" id="exampleModal" tabIndex="-1" role="dialog">
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">New Poll</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="form-group">
								<label htmlFor="question" className="col-form-label">Question:</label>
								<input type="text" className="form-control" onChange={ e => props.addQuestion(e) } value = {props.state.q} placeholder="Question"/>
							</div>
							<div className="form-group">
								<label htmlFor="answer" className="col-form-label">Answer:</label>
								<ul className="list-group">
									{
										ans.map(
											(a, i) => 
												<li className="list-group-item" key={i}>
													{a.a}
												</li>
										)	
									}
								</ul>
								<input type="text" className="form-control" id="a" onChange={ e => {answer = e.target.value; } } style={{margin: "7px 0 0 0"}} placeholder="Type your answer here..." />
								<div className="d-flex flex-row-reverse">
									<button 
										type="button" className="btn btn-warning btn-sm"
										onClick={ 
											() => {
												document.getElementById("a").value = "";
												props.addAnswer({a: answer, votes: 1 });
											} 
										}
										style={{margin: "7px 3px 0 0" }}
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" onClick = {props.postP} className="btn btn-primary" data-dismiss="modal">Save changes</button>
						<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	);
};

NewPoll.PropTypes = {
	state: PropTypes.shape(
		{
			q:PropTypes.string.isRequired,
			a:PropTypes.arrayOf(
				PropTypes.shape(
					{
						a: PropTypes.string.isRequired,
						votes: PropTypes.number.isRequired
					}
				)
			)
		}
	).isRequired,
	addAnswer: PropTypes.func.isRequired,
	addQuestion: PropTypes.func.isRequired,
	postP: PropTypes.func.isRequired,
};

export default NewPoll;