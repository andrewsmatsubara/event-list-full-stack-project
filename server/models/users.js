const { db } = require('./connection.js')

const createUser = async (email, password) => {
  const result = await db.execute('INSERT INTO users (email, password) VALUES (?, ?);', [email, password]);

  return result;
}

const readUser = async () => {
  const [result] = await db.execute('SELECT * FROM users;');

  console.log(result);
}

module.exports = {
  createUser,
  readUser
}