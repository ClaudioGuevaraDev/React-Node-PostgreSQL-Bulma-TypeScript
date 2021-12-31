import { RequestHandler } from 'express'

import { pool } from '../database'

export const validateUsername: RequestHandler = async (req, res, next) => {
    const { username } = req.body

    const result = await pool.query(
        'SELECT * FROM users WHERE username = $1',
        [username]
    )

    const { rows } = result

    if (rows.length > 0) return res.status(400).json({ message: 'El username ya existe.' })

    next()
}