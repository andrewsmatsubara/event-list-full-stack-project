const { createUser, readUser } = require("../models/users");

const createUserController = async (_req, res) => {
  const user = await createUser();

  return res.status(200).json(user);
}

const readUserController = async (_req, res) => {
  const user = await readUser();

  return res.status(200).json(user);
}

module.exports = {
  createUserController,
  readUserController
}