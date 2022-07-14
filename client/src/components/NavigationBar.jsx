import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pictures/logo.png';
import bookicon from './pictures/book-open.svg';
import homeicon from './pictures/home.svg';
import searchicon from './pictures/search.svg';

function NavigationBar() {
	return (
			<div className="container" id="navbar">
				<div className="row row-cols-3">
					<div className="gohome">
						<a href="/homepage">
							<img src={homeicon} alt="Homepage icon" />
						</a>
					</div>
					<div className="gosearch">
						<a href="/search">
							<img src={searchicon} alt="Search icon" />
						</a>
					</div>
					<div className="gowiki">
						<a href="/wiki">
							<img src={bookicon} alt="Go to Wiki" />
						</a>
					</div>
				</div>
				<div className="row row-cols-3">
					<div className="home">HOME</div>
					<div className="search">SEARCH</div>
					<div className="wiki">WIKI</div>
				</div>
			</div>
	);
}

export default NavigationBar;
