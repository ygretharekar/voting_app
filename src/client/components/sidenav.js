import React from "react";
import Login from "./login";

export default class Sidenav extends React.Component {

    
	componentDidMount() {
        
	}
    

	closeNav(){
		document.getElementById("mySidenav").style.width = "0";
	}

	render() {	
        
		return(
			<div id="mySidenav" className="sidenav">
				<a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
				<Login />
			</div>
		);
	}

}