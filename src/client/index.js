import  React  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Polls from "./components/Polls";
import Header from "./components/header";
import Sidenav from "./components/sidenav";
import Footer from "./components/footer";

class App extends React.Component {
	render() {

		const { polls, user } = this.props;

		return (
			<Router>
				<div>
					<Header user = {user} />
					<Sidenav />
					<main>
						<Switch>
							<Route exact to="/polls" component={Polls} />
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
	/* polls: PropTypes.arrayOf(
		PropTypes.shape(
			{
				question: PropTypes.string.isRequired,
				answer: PropTypes.arrayOf(
					PropTypes.shape(
						{
							answer: PropTypes.string.isRequired,
							votes: PropTypes.number.isRequired
						}
					)
				)
			}
		)
	).isRequired, */
	user: PropTypes.shape(
		{
			current: PropTypes.object,
			loggedIn: PropTypes.bool.isRequired
		}
	).isRequired
};

export default connect(mapStateToProps)(App);