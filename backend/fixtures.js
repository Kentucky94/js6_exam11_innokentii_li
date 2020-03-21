const mongoose = require('mongoose');

const config = require('./config');
const User = require('./models/User');
const Category = require('./models/Category');
const Item = require('./models/Item');

const run = async () => {
  await mongoose.connect(config.database, config.databaseOptions);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for(let coll of collections){
    await mongoose.connection.db.dropCollection(coll.name);
  }

  const [electronics, instruments, vehicles] = await Category.create({
    name: 'Electronics',
  }, {
    name: 'Instruments',
  }, {
    name: 'Vehicles',
  });

  const [user1, user2, user3] = await User.create({
    username: 'User1',
    password: 'password1',
    token: user1.generateToken(),
    displayName: 'User 1',
    phoneNumber: '+9961243156312'
  },{
    username: 'User2',
    password: 'password2',
    token: user2.generateToken(),
    displayName: 'User 2',
    phoneNumber: '+9961243156322'
  },{
    username: 'User3',
    password: 'password3',
    token: user3.generateToken(),
    displayName: 'User 3',
    phoneNumber: '+9961243156332'
  });

  await Product.create({
    title: 'Google Pixel',
    description: 'A good smartphone',
    price: 400,
    image: 'fixtures/phone.jpeg',
    category: electronics,
    user: user1
  }, {
    title: 'Electric guitar',
    description: 'In tune',
    price: 800,
    image: 'fixtures/guitar.jpg',
    category: instruments,
    user: user2
  }, {
    title: 'Toyota Camry',
    description: 'Nice ride',
    price: 18000,
    image: 'fixtures/car.jpg',
    category: vehicles,
    user: user3
  });

  mongoose.connection.close();
};

run().catch(error => {
  mongoose.connection.close();

  throw error;
});