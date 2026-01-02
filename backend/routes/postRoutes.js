const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
  createPost,
  getPosts,
  addComment
} = require("../controllers/postController");

router.post("/", upload.single("image"), createPost);
router.get("/", getPosts);
router.post("/:id/comments", addComment);

module.exports = router;
