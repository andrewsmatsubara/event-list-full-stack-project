const { readUser } = require("../models/users");
const { createUserService, readUserByEmailService } = require("../services/users");

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

module.exports = {
  createUserController,
  readUserController
}