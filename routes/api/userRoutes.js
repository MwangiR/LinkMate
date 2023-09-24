const router = require("express").Router();
const { getUsers, getSingleUser } = require("../../controllers/userController");

//the endpoint `/api/users`
router.route("/").get(getUsers);

//the endpooint `/api/users/:userid`
router.route("/:id").get(getSingleUser);

module.exports = router;
