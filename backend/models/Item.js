const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'Category',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectID,
    ref: 'User',
    required: true
  }
});

const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;