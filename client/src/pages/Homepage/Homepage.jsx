import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

function Homepage() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid" id="main-container">
            <img src="https://res.cloudinary.com/vinntt/image/upload/v1656619460/bottle-genie/logo_dugfqq.jpg" class="img-fluid" alt="Bottle Genie app logo" id="logo" />
            <h2 id="heading">Welcome to Bottle Genie</h2>
            <Button onClick={() => navigate("/wiki")}>
                Wiki
            </Button>
            <br />
            <Button onClick={() => navigate("/map")}>
                Go to the map
            </Button>
            <br />
            <Button onClick={() => navigate("/signup")}>
                Sign Up
            </Button>
            <br />
            <Button onClick={() => navigate("/login")}>
                Log In
            </Button>
        </div>
    )
}

export default Homepage;
