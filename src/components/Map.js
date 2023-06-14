import React from 'react'
import { useRef } from 'react';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import SearchBox from './SearchBox';
import MarkerData from './MarkerData';
import MarkerFilter from './MarkerFilter';
import 'leaflet/dist/leaflet.css';
import MarkerFilterPro from './MarkerFilterPro';





//Location defaut
const center = [10.78535, 106.69345];

function SetViewOnClick({ animateRef }) {
    const map = useMapEvent('click', (e) => {
        map.setView(e.latlng, map.getZoom(), {
            animate: animateRef.current || false,
        })
    })
    return null
}


const Map = () => {

    const animateRef = useRef(true)

    return (

        <div className='map'>
            <MapContainer center={center} zoom={15} style={{ width: "100vw", height: "100vh" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup>
                    <MarkerData />
                </MarkerClusterGroup>
                <SearchBox />
                <MarkerFilter />
                <MarkerFilterPro />
                {/* <SetViewOnClick animateRef={animateRef}></SetViewOnClick> */}
            </MapContainer>
        </div>

    )
}

export default Map