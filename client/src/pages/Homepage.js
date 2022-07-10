import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import '../components/pictures/logo.png';
import './Homepage.css';

function Homepage() {
	return (
		<span className="container-fluid" id="main-container-home">
			<span className="welcome-image">
				<img src={require('../components/pictures/logo.png')} className="img-fluid mx-auto" id="logo-home" />
			</span>
			<div className="welcome-message">
				<h3 id="welcome">
					Your personal <span id="recycling-assistant">recycling assistant</span>
				</h3>
			</div>
		</span>
	);
}

export default Homepage;
