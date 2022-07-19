require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { createUserController, readUserController, loginController } = require('./controllers/users');
const app = express();
const PORT = 3001;

app.use(express.json());

app.use(cors());

app.post('/users', createUserController);

app.get('/users', readUserController);

app.post('/login', loginController);

app.listen(PORT, (_req, res) => {
  res.send('funcionando!')
});
