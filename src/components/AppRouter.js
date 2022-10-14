import React, { useContext } from "react"
import {Route, Routes } from "react-router-dom"
import { Context } from "../index"
import { authRoutes, publicRoutes } from "../routes"

const AppRouter = () => {
    const {user} = useContext(Context)
    // const {device} = useContext(Context)
    // console.log('user', user)
    // console.log('device', device)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Element}) => {
               return <Route key={path} path={path} element={Element} />
            })}
            {publicRoutes.map(({path, Element}) => {
               return <Route key={path} path={path} element={Element} />
            })}
        </Routes>
    )
}

export default AppRouter