import { Routes, Route } from 'react-router-dom'

import Login from '../pages/Auth/Login/Login'
import Register from '../pages/Auth/Register/Register'

import Home from '../pages/Home/Home'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    )
}

export default Router