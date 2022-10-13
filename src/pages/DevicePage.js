import React from "react"
import { Container, Row, Col, Image, Card, Button, ListGroup } from "react-bootstrap"
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device = {id: 1, name: 'iPhone 9', price: 549, rating: 4.69, img: "https://dummyjson.com/image/i/products/1/1.jpg"}

    const description = {
        id: 1,
        title: 'iPhone 9',
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones"
    }


    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center justify-content-center">
                            <h2>{device.name}</h2>

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
                <h2>{description.title}</h2>
                <ListGroup>
                    <ListGroup.Item>
                        <strong>Сategory: </strong>
                        {description.category}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Brand: </strong>
                        {description.brand}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Description: </strong>
                        {description.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Rating: </strong>
                        {description.rating}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>Price: </strong>
                        {description.price}$
                    </ListGroup.Item>
                </ListGroup>


            </Row>
        </Container>
    )
}

export default DevicePage