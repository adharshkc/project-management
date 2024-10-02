const user = require("../prisma/helpers/user");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const newUser = await user(name, email, password)
  res.json(newUser);
};

module.exports = { registerUser };
