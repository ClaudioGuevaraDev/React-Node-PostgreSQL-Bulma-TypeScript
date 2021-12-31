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

export const deleteRole: RequestHandler = async (req, res) => {
    const result = await pool.query(
        'DELETE FROM roles WHERE id = $1 RETURNING *',
        [req.params.id]
    )

    const { rows } = result

    if (!rows[0]) return res.status(404).json({ message: 'El rol no existe.' })

    res.json(rows[0])
}

export const updateRole: RequestHandler = async (req, res) => {
    const { name } = req.body

    const result = await pool.query(
        'UPDATE roles SET name = $1, updatedAt = $2 WHERE id = $3 RETURNING *',
        [name, new Date(), req.params.id]
    )

    const { rows } = result

    if (!rows[0]) return res.status(404).json({ message: 'El rol no existe.' })

    res.json(rows[0])
}