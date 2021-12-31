import jwt_decode from 'jwt-decode'

import { 
    useState,
    useEffect, 
    useContext 
} from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import GlobalContext from '../context/GlobalContext'

import ProtectedRoutes from './ProtectedRoutes'

import Login from '../pages/Auth/Login/Login'
import Register from '../pages/Auth/Register/Register'
import Home from '../pages/Home/Home'

import VideoGameFormAdd from '../components/VideoGames/VideoGameFormAdd'
import VideoGameFormUpdate from '../components/VideoGames/VideoGameFormUpdate'
import ReviewList from '../components/Review/ReviewList'

import {
    LOGGED_USER
} from '../context/AppConstants'
import {
    IDecodedToken
} from '../interfaces/decodedTokenInterface'

const Router = () => {
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    const { dispatch } = useContext(GlobalContext)

    const verifyLoggedUser = async () => {
        setLoading(true)
        const tokenJSON = window.localStorage.getItem('token')
        const tokenParse = tokenJSON ? JSON.parse(tokenJSON) : ''

        if (tokenParse === '') {
            navigate('/')
            setLoading(false)
            return
        }

        const decodedToken: IDecodedToken = jwt_decode(tokenParse)

        if (Date.now() / 1000 > decodedToken.exp)  {
            navigate('/')
            setLoading(false)
            window.localStorage.removeItem('token')
            return
        }

        dispatch({
            type: LOGGED_USER,
            payload: {
                logged: tokenParse === '' ? false : true,
                token: tokenParse,
                username: decodedToken.username,
                role: decodedToken.role
            }
        })
        setLoading(false)
    }

    useEffect(() => {
        verifyLoggedUser()
    }, [])

    return (
        <>
        {loading ? (
            <div></div>
        ) : (
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
        )}
        </>
    )
}

export default Router