import { ErrorRequestHandler } from 'express'

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    const { code } = error

    if (code === "23505") {
        return res.status(400).json({ message: 'El dato ya existe.' })
    } else {
        console.log(error)
        return res.status(500).json({ message: 'Error del servidor.' })
    }
    
    next()
}