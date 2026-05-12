import mysql from 'mysql2/promise';

if (!process.env.DB_HOST) {
  console.warn('WARNING: DB_HOST is not defined in environment variables');
}

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: process.env.DB_SSL === 'true' ? {} : undefined
});

export async function query(sql: string, params?: any[]) {
  const [results] = await pool.execute(sql, params);
  return results;
}

export async function initDb() {
  const sql = `
    CREATE TABLE IF NOT EXISTS applications (
      id INT AUTO_INCREMENT PRIMARY KEY,
      app_id VARCHAR(50) UNIQUE,
      type VARCHAR(20),
      name VARCHAR(255),
      email VARCHAR(255),
      status VARCHAR(20) DEFAULT 'pending',
      data LONGTEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await query(sql);
}
