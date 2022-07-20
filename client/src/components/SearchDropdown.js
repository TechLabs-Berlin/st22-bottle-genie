import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createPopper } from '@popperjs/core';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import './../asset/logo.png';
import NavigationBar from './NavigationBar/NavigationBar';
import SearchDataSet from '../data/searchDataSet.json';

function SearchDropdown() {
	const removeDuplicates = (array) => {
		const set = new Set(array);
		const iterable = set.values();
		return Array.from(iterable);
	};

	const materialsArray = removeDuplicates(SearchDataSet.map((item) => item.Material));
	const volumeArray = removeDuplicates(SearchDataSet.map((item) => item.Volume));
	const brandArray = removeDuplicates(SearchDataSet.map((item) => item.Brand));

	return (
		<div className="container-fluid" id="main-container">
			<img src={require('./../asset/logo.png')} className="img-fluid" alt="Bottle Genie app logo" id="logo" />
			<h3 id="heading">SEARCH</h3>
			<form>
				<div class="form-group">
					<select className="form-select">
						{materialsArray.map((item) => {
							return <option selected>Material: {item}</option>;
						})}
					</select>
					<select className="form-select">
						{volumeArray.map((item) => {
							return <option selected>Volume: {item}</option>;
						})}
					</select>
					<select className="form-select">
						{brandArray.map((item) => {
							return (
								<option value="1" selected id="brand">
									Brand: {item}
								</option>
							);
						})}
					</select>
				</div>
			</form>
			<button type="button" className="btn btn-success btn-md" id="button-search">
				Find return point
			</button>
			<NavigationBar />
		</div>
	);
}

export default SearchDropdown;
