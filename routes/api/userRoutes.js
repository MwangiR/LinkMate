const router = require('express').Router();
const { getUsers, getSingleUser, createUser } = require('../../controllers/userController');

//the endpoint `/api/users`
router.route('/').get(getUsers).post(createUser);

//the endpooint `/api/users/:userid`
router.route('/:id').get(getSingleUser);

module.exports = router;
