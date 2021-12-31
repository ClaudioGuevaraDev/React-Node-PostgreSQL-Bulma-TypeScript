import validor from 'email-validator'

import { RequestHandler } from 'express'

import { pool } from '../database'

export const validateEmail: RequestHandler = async (req, res, next) => {
    const { email } = req.body

    if (validor.validate(email) === false) return res.status(400).json({ message: 'Formato incorrecto del correo electrónico.' })

    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    )

    const { rows } = result

    if (rows.length > 0) return res.status(400).json({ message: 'Correo electrónico ya registrado.' })

    next()
}