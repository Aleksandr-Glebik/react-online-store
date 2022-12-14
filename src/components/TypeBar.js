import { observer } from "mobx-react-lite"
import React, { useContext, useEffect } from "react"
import { Context } from "../index"
import ListGroup from 'react-bootstrap/ListGroup'
import { fetchDevices } from "../http/deviceAPI"


const TypeBar = observer( () => {
    const {device} = useContext(Context)

    useEffect( () => {
        fetchDevices(device.selectedType).then(data => device.setDevices(data.products))
    }, [device.selectedType])

    return (
        <ListGroup>
            {device.types.map( (type, ind) => {
                return <ListGroup.Item
                          style={{cursor: 'pointer'}}
                        //   active={type.id === device.selectedType.id}
                          active={type === device.selectedType}
                          onClick={() => device.setSelectedType(type)}
                          key={type + ind}
                >
                    {/* {type.name} */}
                    {type}
                </ListGroup.Item>
            }) }
        </ListGroup>
    )
})

export default TypeBar