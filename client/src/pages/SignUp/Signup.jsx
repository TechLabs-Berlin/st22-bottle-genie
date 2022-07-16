import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../api/auth';
import './Signup.css';
import '../../asset/logo.png';

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
                console.log(err)
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
                <img src={require('../../asset/logo.png')} class="img-fluid" alt="Bottle Genie app logo" id="logo" />
                <h3 id="heading">SIGN UP</h3>
                <form onSubmit={handleSubmit} method="post" id="sign-up-form" >
                    <div>
                        {/* <label htmlFor="email">Email: </label> */}
                        <input type="text" className="form-control input" placeholder="NAME" value={name} onChange={handleName} id="name" />
                    </div>
                    <div>
                        {/* <label htmlFor="password">Password: </label> */}
                        <input type="text" className="form-control input" placeholder="E-MAIL" value={email} onChange={handleEmail} id="email" />
                    </div>
                    <div>
                        {/* <label htmlFor="password">Password: </label> */}
                        <input type="password" className="form-control input" aria-describedby="passwordHelpInline" placeholder="PASSWORD" value={password} onChange={handlePassword} id="password" />
                    </div>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    <button type="submit" className="btn btn-success btn-md mx-auto" id="button-signup">SIGN UP</button>
                    <span className="fw-semibold" id="to-login">
                        Already have an account?
                        <Link className="link" to='/login'> Log in</Link>
                    </span>
                    <p className="fw-semibold" id="to-homepage">
                        <Link className="link" to='/'>Back to Homepage</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignUp;
