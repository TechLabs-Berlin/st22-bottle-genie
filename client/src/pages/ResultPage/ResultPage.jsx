import React from "react";
import Map from "../../components/Map/Map";
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import logo from '../../asset/logo.png';
import Result from "../../components/Result/Result";

function Mappage() {

    return (
        <div className="container-fluid" id="main-container">
            <img src={logo} className="img-fluid" alt="Bottle Genie app logo" id="logo" />
            <Result />
            <Map />
            <NavigationBar />
        </div>
    )
}

export default Mappage;
