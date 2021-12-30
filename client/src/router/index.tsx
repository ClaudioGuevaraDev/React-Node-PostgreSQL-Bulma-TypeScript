import { Routes, Route } from 'react-router-dom'

import Login from '../pages/auth/login/Login'
import Register from '../pages/auth/register/Register'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    )
}

export default Router