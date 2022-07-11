import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import service from '../api/service';
import { login } from '../api/auth';
import '../context/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './LogIn.css';
import '../components/pictures/logo.png';
import Pass from '../components/Pass';

function LogIn() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		// const requestBody = { email, password }
		// service.post('/auth/login', requestBody)
		login(email, password)
			.then((response) => {
				// redirect to homepage
				navigate('/homepage');
			})
			.catch((err) => {
				const errorDescription = err.response.data.message;
				setErrorMessage(errorDescription);
			});

		setEmail('');
		setPassword('');
	};

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);
	const [ errorMessage, setErrorMessage ] = useState(undefined);

	return (
		<div className="container-fluid" id="main-container">
			<img
				src={require('../components/pictures/logo.png')}
				className="img-fluid"
				alt="Bottle Genie app logo"
				id="logo"
			/>
			<h3 id="heading">LOGIN</h3>
			<form onSubmit={handleSubmit} id="login-form">
				<input
					type="email"
					id="inputEmail3"
					className="form-control"
					placeholder="EMAIL"
					value={email}
					onChange={handleEmail}
				/>
				<Pass />
				<button type="submit" className="btn btn-success btn-md mx-auto" id="button-login">
					LOG IN
				</button>
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
