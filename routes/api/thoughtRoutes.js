const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
} = require('../../controllers/thoughtController');

//the endpoint `/api/thoughts`
router.route('/').get(getThoughts).post(createThought);

//the endpoint `/api/thoughts/:id`
router.route('/:id').get(getSingleThought).put(updateThought).delete(deleteThought);

//add reaction
router.route('/:thoughtId/reactions').post(addReaction);

module.exports = router;
