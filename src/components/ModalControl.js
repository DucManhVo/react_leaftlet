import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import MarkerFilter from './MarkerFilter'
import MarkerFilterPro from './MarkerFilterPro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ModalDialog() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='leaflet-control' style={{ paddingTop: '10px', paddingLeft: '50px', position: 'relative' }}>
            <Button variant="light" className='square border border-2 border-secondary' onClick={handleShow}>
                <FontAwesomeIcon icon={faSliders} />
            </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Phân Loại Thiết Bị</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MarkerFilter />
                    <MarkerFilterPro />
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/tables_device">
                        <Button variant="primary" title='Cập nhật thiết bị'>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                    </Link>
                    <Button variant="danger" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );


}
export default ModalDialog