import React, { useContext } from "react"
import { Context } from "../index"

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { SHOP_ROUTE } from "../utils/consts"
import { observer } from "mobx-react-lite"



const NavBar = observer( () => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
         <Container>
            <Link style={{color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>OnlineStore.by</Link>
            {user.isAuth ?
                  <Nav className="ml-auto" style={{color: 'white', display: 'flex', justifyContent: 'space-between', width: 210}}>
                    <Button variant={'outline-light'}>Админ панель</Button>
                    <Button variant={'outline-light'}>Войти</Button>
                  </Nav>
                :
                  <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'}
                            onClick={() => user.setIsAuth(true)}
                    >Авторизация</Button>
                  </Nav>
            }
         </Container>
        </Navbar>
    )
})

export default NavBar