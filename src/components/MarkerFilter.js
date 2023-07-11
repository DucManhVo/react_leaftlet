import React, { useContext, useEffect, useState } from 'react'

import Axios from 'axios'
import { Context } from '../utils/store';

import 'leaflet/dist/leaflet.css';


const MarkerFilter = () => {

    const [state, setState] = useContext(Context);

    const [cusAll, setCustomer] = useState("");

    useEffect(() => {
        Axios.get(`http://localhost:8800/customer`).then((res) => {
            setCustomer(res.data)
            console.log(res)
        })
    }, [])

    const cusList = [];
    for (let index = 0; index < cusAll.length; index++) {
        cusList.push(
            <option key={cusAll[index].cus_id} value={cusAll[index].cus_id}>{cusAll[index].cus_name}</option>
        )
    }

    const onChangeState = (event) => {
        const value = event.target.value;
        setState({ action: value });
        console.log(value)
    };




    return (
        <div>
            <div className='leaflet-control' style={{ paddingTop: '10px', position: 'relative' }}>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect01">Khách hàng</label>
                    <select className="form-select" id="inputGroupSelect01" onChange={onChangeState}>
                        <option value={""} >Tất cả</option>
                        {cusList}
                    </select>
                </div>
            </div>
        </div>
    )
}
export default MarkerFilter;