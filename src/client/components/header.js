import React from "react";
import {Link} from "react-router-dom";

export default class Header extends React.Component {

	openNav(){
		document.getElementById("mySidenav").style.width = "250px";
	}


	render(){
		return(
			<header>
				<nav className = "navbar navbar-dark navbar-expand flex-row">
					<span className="navbar-brand h4">
						Voting App
					</span>
					<div id="user">
						<span className="h5" id="username">Visitor</span>
						<button type="button" className="btn btn-dark" onClick={this.openNav}>Login</button>
					</div>
				</nav>
			</header>
		);
	}
}