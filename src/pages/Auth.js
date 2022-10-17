import React, { useState, useContext } from "react"
import { Button, Card, Container, Form } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts'
import { useNavigate } from "react-router-dom"
import { Context } from "../index"

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    // console.log('location', location)
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const logIn = () => {
        if (isLogin) {
            navigate(SHOP_ROUTE)
            user.setIsAuth(true)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">
                    {isLogin ? 'Авторизация' : 'Регистрация' }
                </h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    />
                </Form>
                <div
                    className="d-flex justify-content-between mt-3"
                >
                    {isLogin
                      ?
                    <div>
                        Нет аккаунта?<br />
                        <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</Link>
                    </div>
                      :
                    <div>
                      Есть аккаунт?<br />
                      <Link to={LOGIN_ROUTE}>Войдите!</Link>
                    </div>
                    }

                        <Button
                            variant="outline-success"
                            className="mt-2"
                            onClick={() => logIn()}
                        >
                            { isLogin ? 'Войти' : 'Регистрация' }
                        </Button>
                </div>
            </Card>
        </Container>
    )
}

export default Auth