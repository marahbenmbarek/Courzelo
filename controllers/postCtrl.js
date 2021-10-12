const Post = require("../models/postModel");
const User = require("../models/userModel");

const postCtrl = {
    addPost :async (req, res) => {
        const newPost = new Post(req.body);
        try {
          const savedPost = await newPost.save();
          res.status(200).json(savedPost);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    updatePost :async (req, res) => {
        try {
          const post = await Post.findById(req.params.id);
          if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
          } else {
            res.status(403).json("you can update only your post");
          }
        } catch (err) {
          res.status(500).json(err);
        }
      },
    deletPost :async (req, res) => {
        try {
          const post = await Post.findById(req.params.id);
          if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("the post has been deleted");
          } else {
            res.status(403).json("you can delete only your post");
          }
        } catch (err) {
          res.status(500).json(err);
        }
      },
    likedislikePost :async (req, res) => {
        try {
          const post = await Post.findById(req.params.id);
          if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
          } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
          }
        } catch (err) {
          res.status(500).json(err);
        }
      },
    getPost :async (req, res) => {
        try {
          const post = await Post.findById(req.params.id);
          res.status(200).json(post);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    getAllPosts :async (req, res) => {
      try {
        const post = await Post.find();
              
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
},
getAllPostByUser :async (req, res) => { 
  try {
      const post = await Post.find({idUser: req.user.id});
              
      res.status(200).json(post);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

}

module.exports = postCtrl