const { createUser, readUser } = require("../models/users");

const createUserController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await createUser(email, password);

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