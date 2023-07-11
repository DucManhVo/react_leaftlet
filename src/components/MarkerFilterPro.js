import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'
import { Context } from '../utils/store';

import 'leaflet/dist/leaflet.css';


const MarkerFilterPro = () => {

    const [state, setState] = useContext(Context);

    const [provinceAll, setProvince] = useState("");
    const [districtAll, setDistrict] = useState("");
    const [wardAll, setWard] = useState("");


    useEffect(() => {
        Axios.get(`http://localhost:8800/province`).then((res) => {
            setProvince(res.data)
            console.log(res)
        })
    }, [])

    const provinceList = [];
    for (let index = 0; index < provinceAll.length; index++) {
        provinceList.push(
            <option key={provinceAll[index].area_code} value={`devices/province/` + provinceAll[index].area_code}>{provinceAll[index].area_name}</option>
        )
    }

    useEffect(() => {
        Axios.get(`http://localhost:8800/district/${state.area_province}`).then((res) => {
            setDistrict(res.data)
            console.log(res)
        })
    }, [state.area_province])

    const districtList = [];
    for (let index = 0; index < districtAll.length; index++) {
        districtList.push(
            <option key={districtAll[index].area_code} value={`devices/district/` + districtAll[index].area_code}>{districtAll[index].area_name}</option>
        )
    }

    useEffect(() => {
        Axios.get(`http://localhost:8800/ward/${state.area_district}`).then((res) => {
            setWard(res.data)
            console.log(res)
        })
    }, [state.area_district])

    const wardList = [];
    for (let index = 0; index < wardAll.length; index++) {
        wardList.push(
            <option key={wardAll[index].area_code} value={`devices/ward/` + wardAll[index].area_code}>{wardAll[index].area_name}</option>
        )
    }


    const onChangeProvinceState = (event) => {
        const value = event.target.value;
        setState({ action: value, area_province: value.split("/")[2] });
        console.log(value)
    };

    const onChangeDistrictState = (event) => {
        const value = event.target.value;
        setState({ action: value, area_district: value.split("/")[2], area_province: state.area_province });
        console.log(value)
    };

    const onChangeWardState = (event) => {
        const value = event.target.value;
        setState({ action: value, area_province: state.area_province, area_district: state.area_district });
        console.log(value)
    };

    return (
        <div>
            <div className='leaflet-control' >
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Tỉnh</label>
                    <select className="form-select" id="inputGroupSelect01" onChange={onChangeProvinceState}>
                        <option value={""} >Tất cả</option>
                        {provinceList}
                    </select>
                </div>
            </div>
            <div className='leaflet-control' >
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect02">Huyện</label>
                    <select className="form-select" id="inputGroupSelect02" onChange={onChangeDistrictState}>
                        <option value={""} >Tất cả</option>
                        {districtList}
                    </select>
                </div>
            </div>
            <div className='leaflet-control' >
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect03">Phường, Xã</label>
                    <select className="form-select" id="inputGroupSelect03" onChange={onChangeWardState}>
                        <option value={""} >Tất cả</option>
                        {wardList}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default MarkerFilterPro