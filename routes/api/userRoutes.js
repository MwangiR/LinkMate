const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addFriend,
} = require('../../controllers/userController');

//the endpoint `/api/users`
router.route('/').get(getUsers).post(createUser);
// add friends
router.route('/:userId/friends/:friendId').post(addFriend);

//the endpoint `/api/users/:userid`
router.route('/:id').get(getSingleUser);

module.exports = router;
