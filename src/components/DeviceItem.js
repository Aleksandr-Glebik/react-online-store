import React from "react"
import { Card, Col, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import star from '../assets/star.png'
import { DEVICE_ROUTE } from "../utils/consts"

const DeviceItem = ({device}) => {
    const navigate = useNavigate()

    const selectProduct = (id) => {
        navigate(DEVICE_ROUTE + '/' + id)
    }

    return (
        <Col md={3}
            onClick={() => selectProduct(device.id)}
        >
                <Card style={{width: 150, cursor: 'pointer', marginTop: 20}} border={'light'}>
                    <Image width={150} src={device.img}/>
                    <div className="d-flex justify-content-between align-items-center  mt-1">
                        <div>...Apple</div>
                        <div className="d-flex align-items-center">
                            <div>{device.rating}</div>
                            <Image width={15} height={15} src={star}/>
                        </div>

                        </div>
                        <div style={{fontWeight: 'bold'}}>
                            {device.name}
                        </div>
                </Card>
        </Col>
    )
}

export default DeviceItem