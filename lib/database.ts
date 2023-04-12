import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Portfolio',
  password: 'Welc0me*9130',
  port: 5432, // or whatever port your PostgreSQL server is running on
});

export default pool;