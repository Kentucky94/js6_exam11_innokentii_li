const express = require('express');
const multer = require('multer');
const nanoid = require('nanoid');
const path =require('path');

const router = express.Router();

const Item = require('../models/Item');
const auth = require('../middleware/auth');
const config = require('../config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, config.uploadPath)
  },
  filename: (req, file, cb) => {
    cb(null, nanoid() + path.extname(file.originalname))
  }
});

const upload = multer({storage});

router.post('/', [auth, upload.single('image')], async (req, res) => {
  try{
    const itemData = req.body;

    if(req.file){
      itemData.image = req.file.filename;
    }

    const item = new Item(itemData);

    await item.save();

    res.send(item);
  }catch(error){
    res.status(400).send(error);
  }
});

router.delete('/:itemId', auth, async (req, res) => {
  try{
    const user = req.user;

    const item = await Item.findOne({_id: req.params.itemId});

    if(!item || user._id.toString() !== item.user.toString()) return res.status(403).send({error: 'This item does not belong to current user!'});

    await Item.remove({_id: req.params.itemId});

    res.send({message: 'Item deleted'})
  }catch(error){
    res.status(400).send(error);
  }
});

router.get('/', async (req, res) => {
  try{
    const items = await Item.find();

    res.send(items)
  }catch(error){
    res.status(400).send(error);
  }
});

router.get('/:itemId', async (req, res) => {
  try{
    const item = await Item.findOne({_id: req.params.itemId});

    res.send(item);
  }catch(error){
    res.status(400).send(error);
  }
});

router.get('/:categoryId', async (req, res) => {
  try{
    const items = await Item.find({category: req.params.categoryId});

    res.send(items);
  }catch(error){
    res.status(400).send(error);
  }
});

module.exports = router;