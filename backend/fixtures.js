const mongoose = require('mongoose');

const config = require('./config');
const Category = require('./models/Category');

const run = async () => {
  await mongoose.connect(config.database, config.databaseOptions);

  const collections = mongoose.connection.db.listCollections().toArray();
};