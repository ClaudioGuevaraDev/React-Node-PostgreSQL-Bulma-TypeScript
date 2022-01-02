import { RequestHandler } from "express";

import { pool } from "../database";

export const getAllCategories: RequestHandler = async (req, res) => {
    const result = await pool.query(
        'SELECT * FROM categories'
    )

    const { rows } = result

    res.json(rows)
}