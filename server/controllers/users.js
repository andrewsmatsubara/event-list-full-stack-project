const { readUser } = require("../models/users");
const { createUserService, readUserByEmailService, readUserByLoginService } = require("../services/users");

const createUserController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const validateEmail = await readUserByEmailService(email);

  if (validateEmail) {
    return res.status(validateEmail.statusCode).json({ message: validateEmail.message });
  }

  const user = await createUserService(email, password);

  return res.status(201).json(user);
}

const readUserController = async (_req, res) => {
  const user = await readUser();

  return res.status(200).json(user);
}

const loginController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const validateLogin = await readUserByLoginService(email, password);

  console.log(validateLogin);

  if (validateLogin.statusCode === 401) {
    return res.status(validateLogin.statusCode).json({ message: validateLogin.message });
  }

  return res.status(201).json(validateLogin);
}

module.exports = {
  createUserController,
  readUserController,
  loginController
}