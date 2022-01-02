import { RequestHandler } from 'express'

import { pool } from '../database'

export const createvideoGameWithoutImage: RequestHandler = async (req, res) => {
    const { title, category } = req.body

    const result = await pool.query(
        'INSERT INTO videogames (title, image, createdAt, updatedAt, categoryId) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [title, '', new Date(), new Date(), category]
    )

    if (result.rowCount === 0) return res.status(500).json({ message: 'Error al crear el video juego.' })

    res.status(201).json(result.rows[0])
}

export const updateImageOfVideoGame: RequestHandler = async (req, res) => {
    const result = await pool.query(
        'UPDATE videogames SET image = $1 WHERE id = $2 RETURNING *',
        [req.file?.filename, req.params.id]
    )

    if (result.rowCount === 0) return res.json({ message: 'Error al guardar la imagen del videojuego.' })

    res.json(result.rows[0])
}

export const getAllVideoGames: RequestHandler = async (req, res) => {
    const result = await pool.query(
        'SELECT * FROM videogames'
    )

    if (result.rowCount === 0) return res.status(500).json({ message: 'Error al listar los videojuegos.' })

    res.json(result.rows)
}