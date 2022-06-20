// import React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';

// function SignUp() {
//     const [userName, setUserName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     // const [age, setAge] = useState('')
//     // const [country, setCountry] = useState('');
//     // const [city, setCity] = useState('');

//     // const navigate = useNavigate();


//     return (
//         <div>
//             <h1>My name is Bottle Genie!</h1>
//         </div>
//     )

// }

// export default SignUp;

import * as React from 'react';
import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function SignUp() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [country, setCountry] = useState('');
    // const [city, setCity] = useState('');

    // const navigate = useNavigate();
    // const countries = [
    //     {
    //         value: 'Germany',
    //         label: 'Germany',
    //     }
    // ];

    // const cities = [
    //     {
    //         value: 'Berlin',
    //         label: 'Berlin',
    //     },
    //     {
    //         value: 'Frankfurt',
    //         label: 'Frankfurt',
    //     },
    //     {
    //         value: 'Hamburg',
    //         label: 'Hamburg',
    //     },
    //     {
    //         value: 'Munich',
    //         label: 'Munich',
    //     },
    //     {
    //         value: 'Others',
    //         label: 'Others',
    //     }

    // ];


    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     const requestBody = { email, password, name, city, country }

        // service.post('/auth/signup', requestBody)
        //     .then(response => {
        //         // redirect to login
        //         navigate('/login')
        //     })
        //     .catch(err => {
        //         const errorDescription = err.response.data.message
        //         setErrorMessage(errorDescription)
        //     });

    //     setName('');
    //     setEmail('');
    //     setPassword('');
    //     setCountry('');
    //     setCity('');
    // };

    // const handleEmail = e => setEmail(e.target.value)
    // const handleName = e => setName(e.target.value)
    // const handlePassword = e => setPassword(e.target.value)
    // const handleCountry = e => setCountry(e.target.value)
    // const handleCity = e => setCity(e.target.value)
    // const [errorMessage, setErrorMessage] = useState(undefined);

    return (
       <div>Hello</div>
    );
}

export default SignUp;
