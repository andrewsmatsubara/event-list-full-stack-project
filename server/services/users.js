const { createUser, readUserByEmail } = require('../models/users');

const createUserService = async (email, password) => {
  const result = await createUser(email, password);

  return result;
}

const readUserByEmailService = async (email) => {
  const [result] = await readUserByEmail(email);

  if (result) {
    return { statusCode: 401, message: 'email already in use' }
  }
}

module.exports = {
  createUserService,
  readUserByEmailService
}