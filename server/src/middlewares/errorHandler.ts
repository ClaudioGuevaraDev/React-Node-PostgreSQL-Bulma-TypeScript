import { ErrorRequestHandler } from 'express'

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    const { name, code } = error

    if (name === 'SyntaxError') {
        return res.status(400).json({ message: 'Formato incorrecto del JSON.' })
    } else if (code === '23502') {
        return res.status(400).json({ message: 'Faltan datos.' })
    } else if (code === '23505') {
        return res.status(400).json({ message: 'El dato ya existe.' })
    } else if (code === '22P02') {
        return res.status(400).json({ message: 'Formado del ID incorrecto.' })
    } else {
        console.log(error.name)
        console.log(error.message)
        console.log(error.code)
        return res.status(500).json({ message: 'Error del servidor.' })
    }
    
    next()
}