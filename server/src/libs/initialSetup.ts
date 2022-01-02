import { pool } from "../database";
import { encryptPassword } from '../libs/handlePassword'

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

export const createUserAdmin = async () => {
    try {
        const result = await pool.query(
            'SELECT * FROM users'
        )

        if (result.rowCount > 0) return
        
        const roleFound = await pool.query(
            'SELECT * FROM roles WHERE name = $1',
            ["Admin"]
        )

        await pool.query(
            'INSERT INTO users (username, email, password, roleId, createdAt, updatedAt) VALUES ($1, $2, $3, $4, $5, $6)',
            ["Claudio Guevara", "claudio.guevara.dev@gmail.com", await encryptPassword("claudio123"), roleFound.rows[0].id, new Date(), new Date()]
        )

    } catch (error) {
        console.log(error)
    }
}