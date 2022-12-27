const { createUser, readUserByEmail, readUserByLogin } = require('../models/users');

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

const readUserByLoginService = async (email, password) => {
  const [result] = await readUserByLogin(email, password);

  if (result === undefined) {
    return { statusCode: 401, message: 'login failed' }
  }

  return result;
}

module.exports = {
  createUserService,
  readUserByEmailService,
  readUserByLoginService
}