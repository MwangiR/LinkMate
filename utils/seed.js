const { User, Thought } = require("../models");
const connection = require("../config/connection");

//seed data
const users = [
  {
    username: "John Doe",
    email: "john.doe@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Jane Smith",
    email: "jane.smith@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Michael Johnson",
    email: "michael.johnson@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Emily Wilson",
    email: "emily.wilson@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "David Brown",
    email: "david.brown@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Sarah Lee",
    email: "sarah.lee@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Robert Taylor",
    email: "robert.taylor@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Linda Clark",
    email: "linda.clark@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "William Hall",
    email: "william.hall@example.com",
    thoughts: [],
    friends: [],
  },
  {
    username: "Maria Davis",
    email: "maria.davis@example.com",
    thoughts: [],
    friends: [],
  },
];

// const seedThoughts = [
//   {
//     thoughtText: "This is thought 1.",
//     username: "John Doe",
//     reactions: [],
//   },
//   {
//     thoughtText: "Another random thought here.",
//     username: "Jane Smith",
//     reactions: [],
//   },
//   {
//     thoughtText: "Thinking about the future.",
//     username: "Michael Johnson",
//     reactions: [],
//   },
//   {
//     thoughtText: "Random musings and ideas.",
//     username: "Emily Wilson",
//     reactions: [],
//   },
//   {
//     thoughtText: "Deep thoughts on a sunny day.",
//     username: "David Brown",
//     reactions: [],
//   },
//   {
//     thoughtText: "Reflecting on life's journey.",
//     username: "Sarah Lee",
//     reactions: [],
//   },
//   {
//     thoughtText: "Random thought number 7.",
//     username: "Robert Taylor",
//     reactions: [],
//   },
//   {
//     thoughtText: "Contemplating the universe.",
//     username: "Linda Clark",
//     reactions: [],
//   },
//   {
//     thoughtText: "A thought about the past.",
//     username: "William Hall",
//     reactions: [],
//   },
//   {
//     thoughtText: "Feeling inspired today.",
//     username: "Maria Davis",
//     reactions: [],
//   },
// ];

connection.once("open", async () => {
  console.log("connected...");

  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.collection.insertMany(users);
  // await Thought.collection.insertMany(seedThoughts);

  console.log("all done!");
  process.exit(0);
});
