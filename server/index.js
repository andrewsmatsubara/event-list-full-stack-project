const express = require('express');
const mysql = require('mysql');
const { createUserController } = require('./controllers/users');
const app = express();
const PORT = 3001;

require('dotenv').config();

app.use(express.json());

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE
});

app.post('/register', createUserController);

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
