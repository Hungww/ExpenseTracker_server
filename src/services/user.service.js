
import User from '../models/user.model.js';
async function createNewUser(data) {
    return await User.add(data);
}

async function getUser(uid) {
    return await User.get(uid);
}

async function updateUser(uid, data) {
    return await User.set(uid, data);
}

export { createNewUser, getUser, updateUser };