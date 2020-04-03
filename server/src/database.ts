import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Shadow113',
    database: 'api',
    port: 5432

})

export default pool;