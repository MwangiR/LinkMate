const { User, Thought } = require('../models');

module.exports = {
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.id });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      res.status(200).json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async createThought(req, res) {
    try {
      const thought = await Thought.create({
        thoughtText: req.body.thoughtContent,
        username: req.body.username,
      });

      const user = await User.findByIdAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true },
      );

      if (!user) {
        return res.status(404).json({
          message: 'No user with that ID',
        });
      }

      res.status(200).json({ message: 'Thought Posted', thought });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { thoughtText: req.body.thoughtContent } },
        { runValidators: true, new: true },
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      res.status(200).json({ message: 'Thought Updated', thought });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.id });
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      // remove the thought from all users associated to it
      await User.updateMany({ thoughts: req.params.id }, { $pull: { thoughts: req.params.id } });

      res.status(200).json({ message: 'Thought Deleted', thought });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        {
          $addToSet: {
            reactions: { reactionBody: req.body.reactionBody, username: req.body.username },
          },
        },
        { new: true },
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      res.status(200).json({ message: 'Added Reaction', thought });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.body.reactionId } } },
        { new: true },
      );
      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }
      res.status(200).json({ message: 'Reaction Deleted', thought });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
