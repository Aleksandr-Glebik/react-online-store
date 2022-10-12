import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import BrandBar from "../components/BrandBar"
import TypeBar from "../components/TypeBar"

const Shop = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col xs={3}>
                    <TypeBar />
                </Col>
                <Col xs={9}>
                    <BrandBar />
                </Col>
            </Row>
        </Container>
    )
}

export default Shop