import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createPopper } from '@popperjs/core';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import './../asset/logo.png';
import NavigationBar from './NavigationBar';

function SearchDropdown() {
	return (
		<div className="container-fluid" id="main-container">
			<img src={require('./../asset/logo.png')} className="img-fluid" alt="Bottle Genie app logo" id="logo" />
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
			<NavigationBar />
		</div>
	);
}

export default SearchDropdown;
