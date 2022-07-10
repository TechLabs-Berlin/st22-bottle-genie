import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import service from '../api/service';
import { login } from '../api/auth';
import '../context/auth';
import { useState } from 'react';
import './Pass.css';
import '../pages/Signup.jsx';

function Pass() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		// const requestBody = { email, password }
		// service.post('/auth/login', requestBody)
		login(email, password)
			.then((response) => {
				// redirect to login
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
		<span className="input-password">
			<input
				type="password"
				id="inputPassword6"
				className="form-control"
				aria-describedby="passwordHelpInline"
				placeholder="PASSWORD"
				value={password}
				onChange={handlePassword}
			/>
		</span>
	);
}
export default Pass;
