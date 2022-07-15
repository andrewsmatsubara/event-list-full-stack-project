require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { createUserController, readUserController, loginController } = require('./controllers/users');
const app = express();
const PORT = 3001;
const HOST = '0.0.0.0';

app.use(express.json());

app.use(cors());

app.get('/', (_req, res) => {
  res.send('Funcionando!');
});

app.post('/users', createUserController);

app.get('/users', readUserController);

app.post('/login', loginController);

app.listen(PORT, HOST);
