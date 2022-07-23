import * as React from 'react';
import { useContext } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import './HomePage.css';
import '../../asset/logo.png';
import { AuthContext } from "../../context/auth";

function Homepage() {
    const { logoutUser } = useContext(AuthContext);


    return (
        <div className="container-fluid" id="main-container">
            <img src={require('../../asset/logo.png')} class="img-fluid" alt="Bottle Genie app logo" id="logo-home" />
            <h2 id="welcome">Welcome!</h2>
            <span id="greeting">Please use the navigation bar at the bottom.</span>
            <span id="logout">And if you're done for the day, <button onClick={logoutUser} id="logout-link">log out</button> and see you again!</span>
            <NavigationBar />
        </div>
    )
}

export default Homepage;
