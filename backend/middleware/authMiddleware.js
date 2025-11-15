const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.json({ error: "No token" });

  const token = header.split(" ")[1];

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(data.id);
    next();
  } catch (e) {
    return res.json({ error: "Invalid token" });
  }
};
