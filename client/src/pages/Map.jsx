import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet"


function Map(props) {

    return (
        <>
            {/* setting the zoomControl property to false as we will be adding a zoomControl manually */}
        <MapContainer className="container-fluid" id="main-container" center={[52.520008, 13.381777]} zoom={12} scrollWheelZoom={false}>
         <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
         </MapContainer>
        </>
    )
}

export default Map;
