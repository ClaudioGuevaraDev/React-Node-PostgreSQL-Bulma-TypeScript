import { RequestHandler } from 'express'

import {
    encryptPassword
} from '../libs/handlePassword'
import { pool } from '../database'

export const signUp: RequestHandler = async (req, res) => {
    const {
        username,
        email, 
        password, 
        role 
    } = req.body 

    if (!password) return res.status(400).json({ message: 'Falta la contraseña.' })

    const roleResult = await pool.query(
        'SELECT * FROM roles WHERE name = $1',
        [role ? role : 'User']
    )

    if (roleResult.rows.length === 0) return res.status(404).json({ message: 'El rol no existe.' })

    const userResult = await pool.query(
        'INSERT INTO users (username, email, password, createdAt, updatedAt, roleId) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [username, email, await encryptPassword(password), new Date(), new Date(), roleResult.rows[0].id]
    )

    res.status(201).json(userResult.rows[0])
}

export const signIn: RequestHandler = async (req, res) => {
    
} 
