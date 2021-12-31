import { Routes, Route } from 'react-router-dom'

import ProtectedRoutes from './ProtectedRoutes'

import Login from '../pages/Auth/Login/Login'
import Register from '../pages/Auth/Register/Register'
import Home from '../pages/Home/Home'

import VideoGameFormAdd from '../components/VideoGames/VideoGameFormAdd'
import VideoGameFormUpdate from '../components/VideoGames/VideoGameFormUpdate'
import ReviewList from '../components/Review/ReviewList'

const Router = () => {

    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path='/home' element={<Home/>}/>
                <Route path='/add-videogame' element={<VideoGameFormAdd/>}/>
                <Route path='/update-videogame/:id' element={<VideoGameFormUpdate/>}/>
                <Route path='/reviews' element={<ReviewList/>}/>
            </Route>
        </Routes>
    )
}

export default Router