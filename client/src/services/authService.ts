import axios from "axios";

import {
    IUserSignIn
} from '../interfaces/authInterface'

const baseUrl = 'http://localhost:4000/api/auth'

export const signIn = async (user: IUserSignIn) => {
    const res = await axios.post(`${baseUrl}/sign-in`, user)
    
    const { data } = res

    window.localStorage.setItem('token', JSON.stringify(data.token))
}