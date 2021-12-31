import dotenv from 'dotenv'

dotenv.config()

const config = {
    PORT: process.env.PORT || 4000,
    PG_USER: process.env.PG_USER || 'postgres',
    PG_PASSWORD: process.env.PG_PASSWORD || '123',
    PG_HOST: process.env.PG_HOST || 'localhost',
    PG_PORT: 5432,
    PG_DATABASE: process.env.PG_DATABASE || 'project01'
}


export default config