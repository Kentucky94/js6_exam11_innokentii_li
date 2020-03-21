const express = require('express');

const Category = require('../models/Category');

const router = express.Router();

router.get('/', async (req, res) => {
  try{
    const categories = await Category.find();

    res.send(categories);
  }catch(error){
    res.status(400).send(error);
  }
});

router.get('/:categoryId', async (req, res) => {
  try{
    const category = await Category.findOne({_id: req.params.categoryId});

    res.send(category);
  }catch(error){
    res.status(400).send(error);
  }
});

module.exports = router;

