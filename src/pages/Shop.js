import { observer } from "mobx-react-lite"
import React, { useContext, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Context } from ".."
// import BrandBar from "../components/BrandBar"
import DeviceList from "../components/DeviceList"
import TypeBar from "../components/TypeBar"
import { fetchDevices,  fetchTypes } from "../http/deviceAPI"

const Shop = observer( () => {
    const {device} = useContext(Context)

    useEffect( () => {
        fetchTypes().then(data => device.setType(data))
        fetchDevices().then(data => device.setDevices(data.products))
    }, [])

    return (
        <Container>
            <Row className="mt-3">
                <Col xs={3}>
                    <TypeBar />
                </Col>
                <Col xs={9}>
                    {/* <BrandBar /> */}
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop