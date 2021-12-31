import jwt from 'jsonwebtoken'

import { RequestHandler } from 'express'

import config from '../config'

import {
    comparePassword,
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
    const { email, password } = req.body

    const result = await pool.query(
        'SELECT U.id, U.username, U.password, R.name as role FROM users as U JOIN roles as R ON U.roleId = R.id WHERE U.email = $1',
        [email]
    )

    if (result.rows.length === 0) return res.status(401).json({ message: 'Error al iniciar sesión.' })

    if (await comparePassword(password, result.rows[0].password) === false) return res.status(401).json({ message: 'Error al iniciar sesión.' })

    const userToken = {
        id: result.rows[0].id,
        username: result.rows[0].username,
        role: result.rows[0].role
    }

    const token = jwt.sign(userToken, config.SECRET, {
        expiresIn: 86400 // 24 horas
    })

    res.json({ token })
} 
