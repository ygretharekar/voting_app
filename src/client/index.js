import  React  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Polls from "./components/Polls";
import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Footer from "./components/footer";
import Home from "./components/Home";
import singlePoll from "./components/SinglePoll/singlePoll";


class App extends React.Component {
	render() {

		const { user } = this.props;

		return (
			<Router>
				<div>
					<Header user = {user} />
					<Sidenav />
					<main>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/polls" component={Polls} />
							<Route path="/polls/:id" component={singlePoll} />
						</Switch>
					</main>
					<Footer />

				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => (
	{
		polls: state.poll,
		user: state.user
	}
);

App.propTypes = {
	polls: PropTypes.arrayOf(
		PropTypes.shape(
			{
				q: PropTypes.string.isRequired,
				a: PropTypes.arrayOf(
					PropTypes.shape(
						{
							a: PropTypes.string.isRequired,
							votes: PropTypes.number.isRequired
						}
					)
				)
			}
		)
	).isRequired, 
	user: PropTypes.shape(
		{
			current: PropTypes.object,
			loggedIn: PropTypes.bool.isRequired
		}
	).isRequired
};

export default connect(mapStateToProps)(App);