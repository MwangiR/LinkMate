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

connection.once("open", async () => {
  console.log("connected...");
  await User.deleteMany({});
  await User.collection.insertMany(users);
  console.log("all done!");
  process.exit(0);
});
