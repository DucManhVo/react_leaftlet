import Axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { Context } from '../utils/store';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons';

const TableCom = () => {
    const [state, setState] = useContext(Context);
    const url = `http://localhost:8800/${state.action}`;
    const [data, setDevices] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        Axios.get(url).then((res) => {
            setDevices(res.data)
            console.log(res)
        })
    }, [url])



    function handleCreate() {
        Axios.post(`http://localhost:8800/`).then((res) => {
            console.log(res)
        })
    }


    function handleDelete() {
        Axios.delete(`http://localhost:8800/delete/800`).then((res) => {
            console.log(res)
        })
    }

    function handleUpdate() {
        Axios.put(`http://localhost:8800/update/800`).then((res) => {
            console.log(res)
        })
    }


    const deviceList = [];
    for (let index = 0; index < data.length; index++) {
        deviceList.push(
            <tr key={index}>
                <td>{data[index].ci_id}</td>
                <td>{data[index].cus_name}</td>
                <td>{data[index].ci_description}</td>
                <td>{data[index].ci_address}</td>
                <td>
                    <Button variant="danger">
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </td>
                <td>
                    <Button variant="warning" className='text-white'>
                        <FontAwesomeIcon icon={faFilePen} />
                    </Button>
                </td>
            </tr>
        )
    }



    return (
        <div className='container my-5'>
            <Link to="/add_device">
                <Button className='mb-3' variant="success">
                    <FontAwesomeIcon icon={faFileCirclePlus} />
                </Button>
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên khách hàng</th>
                        <th>Mô tả</th>
                        <th>Địa chỉ</th>
                    </tr>
                </thead>
                <tbody>
                    {deviceList}
                </tbody>
            </Table>

        </div>

    )
}

export default TableCom