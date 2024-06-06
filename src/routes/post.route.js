import { Router } from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";

const router = Router();
router.get("/create_post", (req, res) => {
  res.send("Create Post route");
});
router.post("/create_post", createPost);
router.get("/get_posts", getPosts);

export default router;