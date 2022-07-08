const createUser = async () => {
  db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
}

module.exports = {
  createUser
}