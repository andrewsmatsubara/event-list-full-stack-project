const { db } = require('./connection.js')

const createUser = async (email, password) => {
  const result = await db.execute('INSERT INTO users (email, password) VALUES (?, ?);', [email, password]);

  return result;
}

const readUser = async () => {
  const [result] = await db.execute('SELECT * FROM users;');

  return result;
}

const readUserByEmail = async (email) => {
  const [result] = await db.execute('SELECT * FROM users WHERE email = ?;', [email]);

  return result;
}

const readUserByLogin = async (email, password) => {
  const [result] = await db.execute('SELECT * FROM users WHERE email = ? AND password = ?;', [email, password]);

  return result;
}

module.exports = {
  createUser,
  readUser,
  readUserByEmail,
  readUserByLogin
}