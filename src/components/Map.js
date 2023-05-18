import React from 'react'
import { useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import SearchBox from './SearchBox';




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
                <SearchBox />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                    <Popup>
                        VNPT IT 2
                    </Popup>
                </Marker>
                <SetViewOnClick animateRef={animateRef}></SetViewOnClick>

            </MapContainer>
        </div>
    )
}

export default Map