const { Router } = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  postTask,
  getTasks,
  updateTask,
} = require("../controllers/TaskController");
const router = Router();

router
  .route("/")
  .post(protect, postTask)
  .get(protect, getTasks)
  .put(protect, updateTask);

module.exports = router;
