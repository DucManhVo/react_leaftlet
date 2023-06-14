import React, { useEffect, useState, useContext } from 'react'
import { Context } from '../utils/store';

import Axios from 'axios';
import L from 'leaflet';

import { Marker, Popup } from 'react-leaflet';



const MarkerData = () => {

    const [state, setState] = useContext(Context);

    const deviceIcon = new L.Icon({
        iconUrl: require('../assets/images/deviceMarker.png'),
        iconSize: [25, 41]
    });


    //Marker
    const [devicesAll, setDevices] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:8800/${state.action}`).then((res) => {
            setDevices(res.data)
            console.log(res)
        })
    }, [state.action])

    const deviceList = [];
    for (let index = 0; index < devicesAll.length; index++) {
        deviceList.push(
            <Marker key={devicesAll[index].device_id} position={[devicesAll[index].device_latitude, devicesAll[index].device_longitude]} icon={deviceIcon}>
                <Popup>
                    Mã thiết bị: {devicesAll[index].device_id}
                    <br />
                    Khách hàng: {devicesAll[index].cus_name}
                    <br />
                    Thông tin: {devicesAll[index].ci_description}
                    <br />
                    Địa chỉ: {devicesAll[index].ci_address}
                </Popup>
            </Marker>
        )
    }
    return deviceList
}

export default MarkerData