import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // your actual password
  database: 'shirakdari_db',
}); 