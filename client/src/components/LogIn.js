import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import './LogIn.css';
import './logo.jpeg';


function LogIn() {
    return (
        <><div className="container-fluid" id="main-container">
            <img src={require('./logo.jpeg')} class="img-fluid" alt="Bottle Genie app logo" id="logo" />
            <h2 id="heading">Log In</h2>
            <h5 id="subheading">Please log in to continue:</h5>
            <span id="log-in-form">
                <input type="email" class="form-control" id="inputEmail3" placeholder="E-Mail" />
                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" placeholder="Password" />
                <div id="passwordHelpInline" class="form-text">Must contain at least one number.</div>
                <span id="remember-me">
                <input type="checkbox" class="custom-control-input custom-control-input-green" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">Remember me</label>
                </span>
            </span>
            <button type="button" class="btn btn-success btn-lg" id="button">Log In</button>
        </div></>
    );
}

export default LogIn;
