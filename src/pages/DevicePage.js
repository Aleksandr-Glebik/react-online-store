import React, {useEffect, useState} from "react"
import { Container, Row, Col, Image, Card, Button, ListGroup } from "react-bootstrap"
import bigStar from '../assets/bigStar.png'
import { useParams } from "react-router-dom"
import { fetchOneDevice } from "../http/deviceAPI"

const DevicePage = () => {
    const [device, setDevice] = useState({})
    const {id} = useParams()

    useEffect( () => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])


    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.thumbnail} />
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                            <h2>{device.title}</h2>

                            <div className="d-flex justify-content-center align-items-center"
                                style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 34}}
                            >
                                {device.rating}
                            </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} $</h3>
                        <Button variant="outline-dark">Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h2>{device.title}</h2>
                <ListGroup>
                    <ListGroup.Item>
                        <strong>Сategory: </strong>
                        {device.category}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Brand: </strong>
                        {device.brand}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Description: </strong>
                        {device.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Rating: </strong>
                        {device.rating}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Price: </strong>
                        {device.price}$
                    </ListGroup.Item>
                </ListGroup>


            </Row>
        </Container>
    )
}

export default DevicePage