import  React  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Footer from "./components/footer";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Sidenav />
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;