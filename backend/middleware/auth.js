const User = require('../models/User');

const auth = async (req, res, next) => {
  const authorizationHeader = req.get('Authorization');

  const [type, token] = authorizationHeader.split(' ');

  if(type !== 'Token' || !token) return res.status(401).send({error: 'No token or invalid token'});

  const user = await User.findOne({token});

  if(!user) return res.status(401).send({error: 'User not found or invalid token'});

  req.user = user;

  next();
};

module.exports = auth;