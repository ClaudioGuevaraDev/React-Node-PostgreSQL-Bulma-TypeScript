import axios from "axios";

import {
    IUserSignIn,
    IUserSignUp
} from '../interfaces/authInterface'

const baseUrl = 'http://localhost:4000/api/auth'

export const signIn = async (user: IUserSignIn) => {
    const res = await axios.post(`${baseUrl}/sign-in`, user)
    
    const { data } = res

    window.localStorage.setItem('token', JSON.stringify(data.token))
}

export const signUp = async (user: IUserSignUp) => {
    const res = await axios.post(`${baseUrl}/sign-up`, user)

    const { data } = res

    return data
}