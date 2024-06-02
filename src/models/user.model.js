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
import { db } from "../utils/firebase.util.js";

const User = {
  add: async (data) => {
    try {
      //get subscription ref where subscriptionName = data.subscriptionName
      const q = query(
        collection(db, "subscription"),
        where("name", "==", "Free")
      );

      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      let subscriptionRef = null;
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        subscriptionRef = doc.ref;
      });

      await setDoc(doc(db, "users", data.uid), {
        email: data.email,
        name: data.name,
        uid: data.uid,
        subscription: subscriptionRef,

      });
      return data;
    } catch (error) {
      console.error("Error adding document: ", error);
      return error;
    }
  },

  get: async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document: ", error);
      return error;
    }
  },

    set: async (uid, data) => {
        try {
            const docRef = doc(db, "users", uid);
            await setDoc(docRef, data);
            console.log("Document updated with ID: ", uid);
            return data;
        } catch (error) {
            console.error("Error updating document: ", error);
            return error;
        }
    },

  getRef: async (uid) => {
    try {
      const docRef = doc(db, "users", uid);
      return docRef;
    } catch (error) {
      console.error("Error getting document: ", error);
      return error;
    }
  },

  getAll: async () => {
    try {
      const users = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      return users;
    } catch (error) {
      console.error("Error getting documents: ", error);
      return error;
    }
  },
};

export default User;
