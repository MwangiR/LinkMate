const { User, Thought } = require('../models');
const connection = require('../config/connection');

//seed data
const users = [
  {
    username: 'John',
    email: 'john.doe@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Jane',
    email: 'jane.smith@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Michael',
    email: 'michael.johnson@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Emily',
    email: 'emily.wilson@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'David',
    email: 'david.brown@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Sarah',
    email: 'sarah.lee@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Robert',
    email: 'robert.taylor@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Linda',
    email: 'linda.clark@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'William',
    email: 'william.hall@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Maria',
    email: 'maria.davis@example.com',
    thoughts: [],
    friends: [],
  },
];

connection.once('open', async () => {
  console.log('connected...');

  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(users);
  // await Thought.collection.insertMany(seedThoughts);

  console.log('all done!');
  process.exit(0);
});
