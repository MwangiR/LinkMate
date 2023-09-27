const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

//the endpoint `/api/users`
router.route('/').get(getUsers).post(createUser);
// add friends
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

//the endpoint `/api/users/:userid`
router.route('/:id').get(getSingleUser).put(updateUser);

module.exports = router;
