import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

	const [ materialsArray, setMaterialsArray ] = useState(
		removeDuplicates(SearchDataSet.map((item) => item.Material))
	);

	const [ volumeArray, setVolumeArray ] = useState(removeDuplicates(SearchDataSet.map((item) => item.Volume)));
	const [ brandArray, setBrandArray ] = useState(removeDuplicates(SearchDataSet.map((item) => item.Brand)));

	const [ material, setMaterial ] = useState('');
	const [ volume, setVolume ] = useState('');
	const [ brand, setBrand ] = useState('');

	const updateList = () => {
		if (brand) {
			setVolumeArray(
				removeDuplicates(SearchDataSet.filter((item) => item.Brand === brand).map((item) => item.Volume))
			);
		}
		if (brand || volume) {
			setMaterialsArray(
				removeDuplicates(
					SearchDataSet.filter((item) => {
						if (brand && volume) {
							return item.Brand === brand && item.Volume === volume;
						}
						if (brand) {
							return item.Brand === brand;
						}
						if (volume) {
							return item.Volume === volume;
						}
					}).map((item) => item.Material)
				)
			);
		}
	};

	const onMaterialChange = (event) => {
		setMaterial(event.target.value);
	};

	const onVolumeChange = (event) => {
		setVolume(event.target.value);
		updateList();
	};

	const onBrandChange = (event) => {
		setBrand(event.target.value);
		updateList();
	};

	const navigate = useNavigate();

	const goToResultPage = () => {
		navigate({
			pathname: '/result',
			search: `?volume=${volume}&brand=${brand}&material=${material}`
		});
	};

	return (
		<div className="container-fluid" id="main-container">
			<img src={require('./../asset/logo.png')} className="img-fluid" alt="Bottle Genie app logo" id="logo" />
			<h3 id="heading">SEARCH</h3>
			<form>
				<div class="form-group">
					<select className="form-select form-select-lg" onChange={onBrandChange} value={brand}>
						<option value="">Brand</option>
						{brandArray.map((item) => {
							return (
								<option value={item} id="choose-brand">
									{item}
								</option>
							);
						})}
					</select>
					<select className="form-select form-select-lg" onChange={onVolumeChange} value={volume}>
						<option value="">Volume</option>
						{volumeArray.map((item) => {
							return (
								<option value={item} id="choose-volume">
									{item}
								</option>
							);
						})}
					</select>
					<select className="form-select form-select-lg" onChange={onMaterialChange} value={material}>
						<option value="">Material</option>
						{materialsArray.map((item) => {
							return (
								<option value={item} id="choose-material">
									{item}
								</option>
							);
						})}
					</select>
				</div>
			</form>
			<button type="submit" className="btn btn-success btn-md" id="button-search" onClick={goToResultPage}>
				Find return point
			</button>
			<NavigationBar />
		</div>
	);
}

export default SearchDropdown;
