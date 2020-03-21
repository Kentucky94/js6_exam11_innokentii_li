const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
  try{
    const userData = req.body;
    const user = new User(userData);

    user.generateToken();

    await user.save();

    return res.send(user);
  }catch(error){
    return res.status(400).send(error);
  }
});

router.post('/sessions', async(req, res) => {
  try{
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({username});
    if(!user) return res.status(400).send({error: 'This user is not registered'});

    const isMatch = await user.comparePasswords(password);
    if(!isMatch) return res.status(400).send({error: 'Invalid password'});

    user.generateToken();
    await user.save();

    return res.send(user);
  }catch(error){
    return res.status(400).send(error);
  }
});

router.delete('/sessions', async (req, res) => {
  const success = {message: 'Success'};
  try{
    const token = req.get('Authorization').split(' ')[1];
    if(!token) return res.send(success);

    const user = await User.findOne({token});
    if(!user) return res.send(success);

    user.generateToken();
    await user.save();

    res.send(success);
  }catch(error){
    res.send(success);
  }
});

module.exports = router;