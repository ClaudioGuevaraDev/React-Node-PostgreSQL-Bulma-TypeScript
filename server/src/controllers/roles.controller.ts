import { RequestHandler } from 'express'

import { pool } from '../database'

export const createRoles: RequestHandler = async (req, res) => {
    const { name } = req.body

    const result = await pool.query(
        'INSERT INTO roles (name, createdAt, updatedAt) VALUES ($1, $2, $3) RETURNING *',
        [name, new Date(), new Date()]
    )   

    const { rows } = result
    
    res.status(201).json(rows[0])
}

export const getAllRoles: RequestHandler = async (req, res) => {
    const result = await pool.query(
        'SELECT * FROM roles'
    )

    const { rows } = result

    res.json(rows)
}