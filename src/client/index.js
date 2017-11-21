import  react  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header";


class App extends react.Component {
	render() {
		return (
			<Router>
				<div>
					<h2>Hello</h2>
					<Header></Header>
				</div>
			</Router>
		);
	}
}

export default App;