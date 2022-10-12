import React, { useContext } from "react"
import { observer } from "mobx-react-lite"
import { Context } from "../index"
import { Card, Row, Col } from "react-bootstrap"

const BrandBar = observer( () => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <Col key={brand.id} md={3} sm={4}>
                    <Card
                        className='p-3'
                        style={{cursor: 'pointer'}}
                        border={brand.id === device.selectedBrand.id ? 'dark' : 'light'}
                        onClick={() => device.setSelectedBrand(brand)}
                    >
                        {brand.name}
                    </Card>
                </Col>
            )}
        </Row>
    )
})

export default BrandBar