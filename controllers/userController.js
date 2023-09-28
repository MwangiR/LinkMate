const { User, Thought } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.id });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async createUser(req, res) {
    try {
      const user = await User.create({ username: req.body.username, email: req.body.email });
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { username: req.body.username, email: req.body.email } },
        { runValidators: true, new: true },
      );
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json({ message: 'User details updated', user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.id });
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      // Delete all the posts associated to this user and then delete the user itself
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.status(200).json({ message: 'User and associated Thoughts Deleted', user });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true },
      );
      if (!friend) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json({ message: `Friend added to ${friend.username} `, friend });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true },
      );
      if (!friend) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json({ message: `Friend removed from ${friend.username}`, friend });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
