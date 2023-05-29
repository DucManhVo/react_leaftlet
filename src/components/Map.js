import React from 'react'
import { useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-cluster';
import SearchBox from './SearchBox';
import 'leaflet/dist/leaflet.css';



const customIcon = new L.Icon({
    iconUrl: require('../assets/images/marker-icon-2x.png'),
    iconSize: [25, 41]
});

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
                    <Marker position={[10.8016175, 106.6382382]} icon={customIcon} />
                    <Marker position={[10.8555748, 106.7802318]} icon={customIcon} />
                    <Marker position={[10.7974046, 106.7011845]} icon={customIcon} />
                    <Marker position={center} icon={customIcon}>
                        <Popup>
                            VNPT IT 2
                        </Popup>
                    </Marker>
                </MarkerClusterGroup>
                <SearchBox />
                <SetViewOnClick animateRef={animateRef}></SetViewOnClick>
            </MapContainer>
        </div>
    )
}

export default Map