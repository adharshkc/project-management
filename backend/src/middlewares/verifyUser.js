const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const verifyUser = function (req, res, next) {
  console.log(req.headers.authorization)
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json("Unauthorized");
  const bearer = authorization.split(" ");
  const token = bearer[1];
  if (token) {
    jwt.verify(token, secret, (err, payload) => {
      if (err) return res.status(401).json("Unauthorized");
      req.user = payload;
      next();
    });
  }
};

module.exports = verifyUser;
