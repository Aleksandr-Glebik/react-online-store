import React, { useContext } from "react"
import { Context } from "../index"

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"


const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const goToAdminPage = () => {
      navigate(ADMIN_ROUTE)
    }
    const goToLoginPage = () => {
      navigate(LOGIN_ROUTE)
    }
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      navigate(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
         <Container>
            <Link style={{color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>OnlineStore.by</Link>
            {user.isAuth ?
                  <Nav className="ml-auto" style={{color: 'white', display: 'flex', justifyContent: 'space-between', width: 210}}>
                    <Button
                      variant={'outline-light'}
                      onClick={() => goToAdminPage()}
                    >Админ панель</Button>
                    <Button
                      variant={'outline-light'}
                      onClick={() => logOut()}
                    >Выйти</Button>
                  </Nav>
                :
                  <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={'outline-light'}
                            onClick={() => goToLoginPage()}
                    >Авторизация</Button>
                  </Nav>
            }
         </Container>
        </Navbar>
    )
})

export default NavBar