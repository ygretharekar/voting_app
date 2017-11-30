import React from "react";
import {Link} from "react-router-dom";
import {logout} from "../../reducers/user";
import {connect} from "react-redux";
 
class Header extends React.Component {

	openNav(){
		document.getElementById("mySidenav").style.width = "250px";
	}


	render(){
		if(this.props.user.loggedIn){
			return(
				<header>
					<nav className = "navbar navbar-dark navbar-expand flex-row">
						<span className="navbar-brand h4">
						Voting App
						</span>
						<div id="user" style = {{marginLeft:63 + "em"}}>
							<span className="h5" id="username">{this.props.user.current.twitter.username}</span>
							<button type="button" className="btn btn-dark" onClick={this.props.logout}>LogOut</button>
						</div>
					</nav>
				</header>
			);
		}

		return(
			<header>
				<nav className = "navbar navbar-dark navbar-expand flex-row">
					<span className="navbar-brand h4">
						Voting App
					</span>
					<div id="user">
						<span className="h5" id="username">visitor</span>
						<button type="button" className="btn btn-dark" onClick = {this.openNav}>LogIn</button>
					</div>
				</nav>
			</header>
		);
	}
}

export default connect(() => {}, {logout})(Header);
