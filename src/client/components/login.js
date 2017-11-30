import React from "react";

const Login = props => {
	return(
		<a  id="twitterLogin"
			className="btn btn-outline-primary"
			href="/api/auth/twitter/callback">
        Twitter Login
		</a>
	);
};

export default Login;
