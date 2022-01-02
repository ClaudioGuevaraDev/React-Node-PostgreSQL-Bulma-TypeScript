import { pool } from "../database";

export const createRoles = async () => {
    try {
        const result = await pool.query(
            'SELECT COUNT(*) FROM roles'
        )
        const { rows } = result
        
        const { count } = rows[0]

        if (parseInt(count) > 0) return

        await pool.query(
            'INSERT INTO roles (name, createdAt, updatedAt) VALUES ($1, $2, $3)',
            ['Admin', new Date(), new Date()]
        )
        await pool.query(
            'INSERT INTO roles (name, createdAt, updatedAt) VALUES ($1, $2, $3)',
            ['User', new Date(), new Date()]
        )
    } catch (error) {
        console.log(error)
    }
}

export const createCategories = async () => {
    try {

        const result = await pool.query('SELECT * FROM categories')

        if (result.rowCount > 0) return

        await pool.query(
            'INSERT INTO categories (name, createdAt, updatedAt) VALUES ($1, $2, $3)', 
            ['Todos las categorías', new Date(), new Date()]
        )
        await pool.query(
            'INSERT INTO categories (name, createdAt, updatedAt) VALUES ($1, $2, $3)', 
            ['Peleas', new Date(), new Date()]
        )
        await pool.query(
            'INSERT INTO categories (name, createdAt, updatedAt) VALUES ($1, $2, $3)', 
            ['Estrategia', new Date(), new Date()]
        )
        await pool.query(
            'INSERT INTO categories (name, createdAt, updatedAt) VALUES ($1, $2, $3)', 
            ['Entretención', new Date(), new Date()]
        )
        await pool.query(
            'INSERT INTO categories (name, createdAt, updatedAt) VALUES ($1, $2, $3)', 
            ['Deporte', new Date(), new Date()]
        )
    } catch (error) {
        console.log(error)
    }
}