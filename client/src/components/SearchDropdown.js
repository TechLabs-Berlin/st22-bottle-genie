import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createPopper } from '@popperjs/core';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import './pictures/logo.png';
import bookicon from './pictures/book-open.svg';
import homeicon from './pictures/home.svg';
import searchicon from './pictures/search.svg';

function SearchDropdown() {
	return (
		<div className="container-fluid" id="main-container">
			<img src={require('./pictures/logo.png')} className="img-fluid" alt="Bottle Genie app logo" id="logo" />
			<h3 id="heading">SEARCH</h3>
			<select className="form-select" aria-label="Default select example">
				<option selected id="material">
					Choose material
				</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
			<select className="form-select" aria-label="Default select example">
				<option selected id="volume">
					Choose volume
				</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
			<select className="form-select" aria-label="Default select example">
				<option selected id="brand">
					Choose brand
				</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
			<button type="button" className="btn btn-success btn-md" id="button-search">
				Find return point
			</button>

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
		</div>
	);
}

export default SearchDropdown;
