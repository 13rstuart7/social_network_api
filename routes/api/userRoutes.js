const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  updateUser,
  createUser,
  deleteUser,
  // addAssignment,
  // removeAssignment,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/assignments/:assignmentId
// router.route('/:userId/assignments/:assignmentId').post(addAssignment).delete(removeAssignment);

module.exports = router;
