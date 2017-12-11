import React from "react";
import { Link } from "react-router-dom";

export default props => {
	const openNav = () => document.getElementById("mySidenav").style.width = "250px";
	

	return (
		<div className="container" style={{marginTop: "7rem"}}>
			<div className="d-flex justify-content-between">
				<div className="p-2">
					<div className="card" style={{width: "20rem"}}>
						<div className="card-block">
							<h4 className="card-title">See Polls</h4>
							<p className="card-text">
								See all added polls.
							</p>
							<Link to="/polls" className="btn btn-primary">To Polls</Link>
						</div>
					</div>
				</div>
				<div className="p-2">
					<div className="card" style={{width: "20rem"}}>
						<div className="card-block">
							<h4 className="card-title">Vote</h4>
							<p className="card-text">
								Vote and see the results.
							</p>
							<button onClick={openNav} className="btn btn-primary">Login</button>
						</div>
					</div>
				</div>
				<div className="p-2">
					<div className="card" style={{width: "20rem"}}>
						<div className="card-block">
							<h4 className="card-title">See Charts</h4>
							<p className="card-text">
								Select the Poll and see the results.
							</p>
							<Link to="/polls" className="btn btn-primary">To Polls</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};