import {
  collection,
  setDoc,
  doc,
  getDoc,
  deleteDoc,
  getDocs,
  where,
  query,
} from "firebase/firestore";

import { getStorage, ref } from "firebase/storage";
import { db } from "../utils/firebase.util.js";
import { getAll } from "firebase/remote-config";


const Post = {
  add: async (data) => {
    try {
          //get userRef by uid
         const userRef = doc(db, "users", data.owner.uid);
      const docRef = await setDoc(doc(db, "posts", data.createdDate), {
        owner: userRef,
        title: data.tittle,
        content: data.content,
        description: data.description,
        image: data.image,
        createdDate: data.createdDate,

      });
    } catch (error) {
      console.error("Error adding document: ", error);
      return error;
    }
  },

  getAll: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      let posts = [];
      for(const doc of querySnapshot.docs){
        let user = doc.data().owner;

        //get user data
        let userDoc =await getDoc(user);
        let userData = userDoc.data();
        let post = doc.data();
        post.owner = userData;
          
        posts.push(post);
      }
      console.log(posts);
      return posts;
    } catch (error) {
      console.error("Error getting documents: ", error);
      return error;
    }
  },





};

export default Post;
