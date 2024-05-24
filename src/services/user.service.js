
import User from '../models/user.model.js';
async function createNewUser(data) {
    return await User.add(data);
}

export { createNewUser };