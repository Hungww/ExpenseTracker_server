import Post from "../models/post.model.js";

import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
const storage = getStorage();
async function createNewPost(data) {
    try {
        console.log("Data in service: ", data);
        const storageRef = ref(storage, `posts/${data.createdDate}`);
        const snapshot = await uploadString(storageRef, data.image, 'base64');
        const downloadURL = await getDownloadURL(snapshot.ref);
        data.image = downloadURL;
        Post.add(data);

        
    } catch (error) {
        console.error("Error uploading image: ", error);
        
        
    }




    
//   return await Post.add(data);
}

async function getAllPosts() {
    return await Post.getAll();
}
export { createNewPost, getAllPosts };