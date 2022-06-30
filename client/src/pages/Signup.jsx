import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import service from '../api/service';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestBody = { email, password, name }

        service.post('/auth/signup', requestBody)
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
                <div>
                    <form onSubmit={handleSubmit} >
                        <h1>Sign up</h1>
                        <div>
                            <div >
                                <div>
                                    <label htmlFor="email">Email: </label>
                                    <input type="text" value={email} onChange={handleEmail} />
                                </div>
                                <div>
                                    <label htmlFor="password">Password: </label>
                                    <input type="password" value={password} onChange={handlePassword} />
                                </div>
                                <div>
                                    <label htmlFor="name">Name: </label>
                                    <input type="text" value={name} onChange={handleName} id="name" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit">Sign Up</button>
                        </div>
                        <span>Already have an account? </span>
                        <Link to='/login'>Log in</Link>
                    </form>
                </div>
                {errorMessage && <h5>{errorMessage}</h5>}
            </>
    )
}

export default SignUp;
