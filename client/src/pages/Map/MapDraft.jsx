import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet"
import { berlinDistrictsXY } from "../data/data"


function Map(props) {
    // Create the map ref:
    const mapRef = useRef(null)
    // Create the tile ref:
    const tileRef = useRef(null)
    // set up a ref for the layerGroup
    const layerRef = useRef(null)
     // Create the ref for the layerControl:
  const controlRef = useRef(null)

    // Create our map tile layer:
    const MAP_TILE = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    // Assign the tileRef to the tileLayer:
    tileRef.current = MAP_TILE

    // Define an object literal with params that will be passed to the map:
    const mapParams = {
        center: [52.520008, 13.381777],
        zoom: 12,
        zoomControl: false,
        scrollWheelZoom: false,
        closePopupOnClick: false,
        // maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
        layers: [tileRef.current]
    };

    // This useEffect hook runs when the component is first mounted, similar to componentDidMount() lifecycle method of class-based components:
    // Map creation:
    useEffect(() => {
        // Assign the map instance to the mapRef:
        mapRef.current = L.map("map", mapParams);
    }, []);

    // Add map controls:
    useEffect(() => {
        // Pass a baseLayers object to the layer control:
         // Assign the ref to the layerControl:
        controlRef.current = L.control.layers({
            OpenStreetMap: tileRef.current
        }).addTo(mapRef.current); // Add the control to our map instance

        // Create the zoom control:
        L.control.zoom({
            position: "topright"
        }).addTo(mapRef.current); // Add the control to our map instance
    }, [])

    // Use mapRef.current to add map event listeners to our map instance:
    useEffect(() => {
        mapRef.current.on("zoomstart", () => {
            console.log("ZOOM STARTED");
        });
    }, [])

    // Creating Layer Group for the circle layer:
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
    // Add the layerGroup to the layerControl once layerGroup is created:
    controlRef.current.addOverlay(layerRef.current, 'Circles')
  }, [])

    //Add circle
    useEffect(() => {
        // First, clear any layers associated with the layerGroup:
        layerRef.current.clearLayers()

        // Iterate berlinDistrictsXY from props:
        Array.from(berlinDistrictsXY).forEach(district => {
          // Create the Leaflet Circle and add to layerGroup:
          L.circle(district.latLng, { radius: 100000 }).addTo(
            layerRef.current
          );
        });
        // Include berlinDistrictsXY in our dependency to watch for changes to data:
       }, [berlinDistrictsXY])


    return (
        <>
            <div className="container-fluid" id="main-container" />
            <MapContainer>

            </MapContainer>
            {/* setting the zoomControl property to false as we will be adding a zoomControl manually
        <MapContainer className="container-fluid" id="main-container" center={[52.520008, 13.381777]} zoom={12} scrollWheelZoom={false}>
         <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
         </MapContainer>

         https://leaflet-extras.github.io/leaflet-providers/preview/#filter=OpenStreetMap.DE
         var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png', {
         	maxZoom: 18,
         	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         }); */}
        </>
    )
}

export default Map;
