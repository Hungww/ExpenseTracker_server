import { createNewPost, getAllPosts } from "../services/post.service.js";

async function createPost(req, res) {
  try {
    const data = req.body;
    const user = await createNewPost(data);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}
async function getPosts(req, res) {
  try {
    const posts = await getAllPosts();
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
}

export { createPost, getPosts };
