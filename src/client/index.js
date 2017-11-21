import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";


class App extends Component {
	render() {
		return (
			<Router>
				<Header></Header>
				<Footer></Footer>
			</Router>
		);
	}
}
