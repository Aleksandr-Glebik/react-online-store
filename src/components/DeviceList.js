import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { Row, Col } from "react-bootstrap"
import { Context } from "../index"
import DeviceItem from "./DeviceItem"

const DeviceList = observer( () => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex">
            {device.devices.map( device =>
                <Col key={device.id}>
                    <DeviceItem device={device}/>
                </Col>
            )}
        </Row>
    )
})

export default DeviceList