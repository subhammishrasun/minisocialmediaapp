const Post = require("../models/post");

// Create Post
exports.createPost = async (req, res) => {
  try {
    const { caption } = req.body;

    if (!req.file)
      return res.status(400).json({ message: "Image required" });

    const post = await Post.create({
      caption,
      imageUrl: `/uploads/${req.file.filename}`
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add Comment
exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push({ text });
    await post.save();

    res.status(201).json(post.comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
