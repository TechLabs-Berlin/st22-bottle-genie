import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';
import service from '../../api/service';
import { AuthContext } from "../../context/auth";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LogIn.css';
import '../../asset/logo_animated.gif';
import '../../asset/tagline.png';

function LogIn() {
	const { isLoggedIn, storeToken, verifyStoredToken } = useContext(AuthContext);
	const [email, setEmail] = useState('');
	const [isHidden, setHidden] = useState(true);
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState(undefined);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		const requestBody = { email, password }
		service
			.post('/auth/login', requestBody)
			// login(email, password)
			.then((response) => {
				const token = response.data.authToken;
				storeToken(token);
				// verifyStoredToken return a promise now we can chain a .then and wait for the response
				verifyStoredToken().then(() => {
					// redirect to homepage
					navigate('/');
				})
			})
			.catch((err) => {
				const errorDescription = err.response.data.message;
				setErrorMessage(errorDescription);
			})
			.finally(() => setLoading(false));
};

const handleEmail = (e) => setEmail(e.target.value);
const handlePassword = (e) => setPassword(e.target.value);

if (!loading && isLoggedIn) {
	navigate("/");
}

return (
	<div className="container-fluid" id="login-container">
		<img
			src={require('../../asset/logo_animated.gif')}
			className="img-fluid"
			alt="Animated Bottle Genie app logo"
			id="animated-logo"
		/>
		<img
			src={require('../../asset/tagline.png')}
			className="img-fluid"
			alt="Bottle Genie app tagline"
			id="tagline"
		/>
		<h3 id="heading">LOGIN</h3>
		<form onSubmit={handleSubmit} method="post" id="login-form">
			<input
				type="email"
				id="inputEmail3"
				className="form-control"
				placeholder="EMAIL"
				value={email}
				onChange={handleEmail}
			/>
			<span className="input-password">
				<input
					type={isHidden ? 'password' : 'text'}
					id="inputPassword6"
					className="form-control"
					aria-describedby="passwordHelpInline"
					placeholder="PASSWORD"
					value={password}
					onChange={handlePassword}
				/>
				<span className="material-symbols-outlined" id="icon" onClick={() => setHidden(!isHidden)}>
					{isHidden ? 'visibility' : 'visibility_off'}
				</span>
			</span>
			<button type="submit" className="btn btn-success btn-md mx-auto" id="button-login">
				LOG IN
			</button>
			{errorMessage && <h5>{errorMessage}</h5>}
			<p className="fw-normal">
				<Link className="link" to="/resetpass" id="resetpassword">
					Forgot password?
				</Link>
			</p>
			<div className="fw-semibold">Don't have an account yet?</div>
			<Link className="link" to="/signup">
				<button type="button" className="btn btn-success btn-md mx-auto" id="button-signin">
					SIGN UP
				</button>
			</Link>
		</form>
	</div>
);
}

export default LogIn;
