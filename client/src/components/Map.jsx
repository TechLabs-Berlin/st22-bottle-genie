import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import './Map.css';
// import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet"

//add Marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});

function Map(props) {
    // This position could be changed to some place in Germany so initial view won't be in the middle of the sea
    const [userLocation, setUserLocation] = useState([0, 0]);
    // const berlinLocation = [52.520008, 13.381777];
    const initalLocation = [51.1657, 10.4515];
    const zoom = 12;


    useEffect(() => {
        const success = ({ coords }) => {
            setUserLocation([coords.latitude, coords.longitude]);
        };
        const options = {
            enableHighAccuracy: false,
            timeout: 5000, // timeout to find a valid coordinate
            maximumAge: 0 // coordinates cached time (0 means non cached coordinates)
        };
        // We need to clear the watch on unmounting the component since it's an operation that consumes memory and battery
        const watchId = navigator.geolocation.watchPosition(success, console.error, options);
        return () => navigator.geolocation.clearWatch(watchId);
    }, [])


    const onMapCreated = map => {
        // console.log(map.constructor.name);
        // map.flyTo([10.762622, 106.660172], 12, { duration: 15 })
        map.flyTo([52.520008, 13.381777], 12, { duration: 8 })
        // map.flyTo({userLocation}, 12, { duration: 8 })
    }

    return (
        <>
            {/* setting the zoomControl property to false as we will be adding a zoomControl manually */}
            <MapContainer
                className="container-fluid"
                id="main-container"
                whenCreated={onMapCreated}
                center={initalLocation}
                zoom={zoom}
                scrollWheelZoom={false}
                doubleClickZoom={true}
                zoomAnimation={true}
                fadeAnimation={true}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={userLocation}>
                    <Popup>You are here!</Popup>
                    {/* stroke={false} means the circle border won't be showed
                    color="limegreen" fillColor="limegreen" weight={5} opacity={0.5} */}
                    <Circle className="circle-radius" center={userLocation} radius={1200}></Circle>
                </Marker>
            </MapContainer>
        </>
    )
}

export default Map;
