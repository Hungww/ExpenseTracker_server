
import { createNewUser, getUser, updateUser } from '../services/user.service.js';

async function createUser(req, res) {
  try {
    console.log(req.body);
    const data = req.body;
    const user = await createNewUser(data);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getUserById(req, res) {
  try {
    const uid = req.params.uid;
    console.log(uid);
    const user = await getUser(uid);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function updateUserbyId(req, res) {
  console.log("update user by id");
  try {
    const uid = req.params.uid;
    const data = req.body;
    const user = await updateUser(uid, data);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

export { createUser, getUserById, updateUserbyId };