
import { createNewUser } from '../services/user.service.js';

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

export { createUser };