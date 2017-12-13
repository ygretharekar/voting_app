import React from "react";

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

									<div className="d-flex flex-row-reverse" style={{margin: "7px 0 0 0"}} >
										<div className="input-group">
											<input 
												type="text" 
												className="form-control" 
												aria-label="Text input with dropdown button"
												onChange={e => props.onChange(e)}
												value = {props.state.edit}
											/>
											<div className="input-group-btn">
												<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
													Edit option no.
												</button>
												<div className="dropdown-menu dropdown-menu-right">
													{
														props.poll.a.map(
															(a, i) => 
																<a
																	key={i}
																	className="dropdown-item"
																	onClick={ () => props.putValue(a, i) }
																	href="#"
																>
																	option {" "} {i + 1}
																</a>
														)
													}
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div className="modal-footer">
							<button 
								type="button"
								className="btn btn-primary"
								data-dismiss="modal" 
								onClick = {props.saveAns}
							>
								Save changes
							</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NAComp;