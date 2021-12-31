import { RequestHandler } from 'express'

import { pool } from '../database'

export const getAllUsers: RequestHandler = async (req, res) => {
    const result = await pool.query('SELECT * FROM users')

    const { rows } = result

    res.json(rows)   
}