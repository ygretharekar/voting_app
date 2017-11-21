import { component } from "react";

export default class Header extends component {

	render(){
		return(
			<div>
				< nav className = "navbar navbar-light bg-light" > 
					<span class="navbar-brand mb-0 h1">Navbar</span> 
				</nav>
			</div>
		);
	}
}