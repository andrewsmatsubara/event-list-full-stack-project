require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { createUserController, readUserController } = require('./controllers/users');
const app = express();
const PORT = 3001;

app.use(express.json());

app.use(cors());

app.post('/users', createUserController);

app.get('/users', readUserController)

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
