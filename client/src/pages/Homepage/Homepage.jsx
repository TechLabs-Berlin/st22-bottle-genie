import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './HomePage.css';
import '../../asset/logo.png';

function Homepage() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid" id="main-container">
            <img src={require('../../asset/logo.png')} class="img-fluid" alt="Bottle Genie app logo" id="logo-home" />
            <h2 id="welcome">Welcome!</h2>
            <br />
            <span id="greeting">Please use the navigation bar at the bottom.</span>
            <span id="logout">And if you're done for the day, <a href="/login" id="logout-link">log out</a> and see you again!</span>
            <NavigationBar />
        </div>
    )
}

export default Homepage;
