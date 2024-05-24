import { collection, setDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../utils/firebase.util.js";
import { get } from "firebase/database";

const User = {
    add: async (data) => {
        try {
            await setDoc(doc(db, "users", data.uid), {
                email: data.email,
                name: data.name,
                uid: data.uid,
            
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
}

export default User;
