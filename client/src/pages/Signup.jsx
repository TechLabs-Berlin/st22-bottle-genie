import React from "react";
import { useState } from "react";

function SignUp() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('')
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    // const navigate = useNavigate();
    const countries = [
        {
            value: 'Germany',
            label: 'Germany',
        }
    ];

    const cities = [
        {
            value: 'Berlin',
            label: 'Berlin',
        },
        {
            value: 'Frankfurt',
            label: 'Frankfurt',
        },
        {
            value: 'Hamburg',
            label: 'Hamburg',
        },
        {
            value: 'Munich',
            label: 'Munich',
        },
        {
            value: 'Others',
            label: 'Others',
        }

    ];



    return (
        <div>
            <h1>My name is Bottle Genie!</h1>
        </div>
    )

}

export default SignUp;
