import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import service from '../api/service';
import { signup } from '../api/auth';
import './Signup.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // const requestBody = { email, password, name }
        // service.post('/auth/signup', requestBody)
        signup(name, password, email)
            .then(response => {
                // redirect to login
                navigate('/login')
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            });

        setName('');
        setEmail('');
        setPassword('');
    };

    const handleEmail = e => setEmail(e.target.value)
    const handleName = e => setName(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const [errorMessage, setErrorMessage] = useState(undefined);

    return (
        <>
            <div className="container-fluid" id="main-container">
                <img src="https://res.cloudinary.com/vinntt/image/upload/v1656619460/bottle-genie/logo_dugfqq.jpg" class="img-fluid" alt="Bottle Genie app logo" id="logo" />
                <h2 id="heading">Sign Up</h2>
                <h5 id="subheading">Create an account to start journey with us</h5>
                <form onSubmit={handleSubmit} id="sign-up-form" >
                    <div>
                        {/* <label htmlFor="name">Name: </label> */}
                        <input type="text" class="form-control input" placeholder="Name*" value={name} onChange={handleName} id="name" />
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email: </label> */}
                        <input type="text" class="form-control input" placeholder="E-Mail*" value={email} onChange={handleEmail} />
                    </div>
                    <div>
                        {/* <label htmlFor="password">Password: </label> */}
                        <input type="password" class="form-control input" aria-describedby="passwordHelpInline" placeholder="Password*" value={password} onChange={handlePassword} />
                    </div>
                    <div id="passwordHelpInline" class="form-text">
                        <p>Must contain at least 5 characters, numbers and special characters</p>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-success btn-lg" id="button">Get Started</button>
                    </div>
                    <div class="to-login form-text">
                        <span> Already have an account?
                            <Link class="link" to='/login'> Log in</Link>
                        </span>
                    </div>
                    <div class="to-homepage form-text">
                            <Link class="link" to='/'> Back to Homepage</Link>
                    </div>
                </form>
            </div>
            {errorMessage && <h5>{errorMessage}</h5>}
        </>
    )
}

export default SignUp;
