import { RequestHandler } from 'express'

export const unknownEndpoint: RequestHandler = (req, res, next) => {
    return res.status(404).json({ message: 'Unknown Endpoint.' })

    next()
}