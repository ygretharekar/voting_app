import React from "react";
import PropTypes from "prop-types";


const NAComp = props => {  
	return(
		<div>
			<div className="modal" id="addAModal" tabIndex="-1" role="dialog">
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
									<h5>{props.poll.q}</h5>
								</div>
								<div className="form-group">
									<label htmlFor="answer" className="col-form-label">Answer:</label>
									<ul className="list-group">
										{
											props.poll.a.map(
												(a, i) => 
													<li className="list-group-item" key={i}>
														{a.a}
													</li>
											)
										}
									</ul>
									<input type="text" className="form-control" id="a" style={{margin: "7px 0 0 0"}} placeholder="Type your answer here..." />
									<div className="d-flex flex-row-reverse">
										<button 
											type="button" className="btn btn-secondary btn-sm dropdown-toggle"
											style={{margin: "7px 0 0 3px" }} data-toggle="dropdown"
											aria-haspopup="true" aria-expanded="false" >
										Edit Question
										</button>
										<div className="dropdown-menu">
											{
												props.poll.a.map(
													(a, i) => 
														<a className="dropdown-item" key={ i } >
															{i + 1}
														</a>
												)
											}
										</div>
										<button
											type="button" className="btn btn-warning btn-sm"
											style={{margin: "7px 3px 0 0" }}
										>
										Submit
										</button>
									</div>
								</div>
							</form>		

						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default NAComp;