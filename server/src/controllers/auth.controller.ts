import { RequestHandler } from 'express'

export const signUp: RequestHandler = async (req, res) => {
    const { email, password, role } = req.body    

    res.json('wenas')
}

export const signIn: RequestHandler = async (req, res) => {

} 
