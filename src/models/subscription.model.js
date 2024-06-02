import { collection, setDoc, doc, getDoc, getDocs, addDoc, orderBy, query } from "firebase/firestore";
import { db } from "../utils/firebase.util.js";
import { set } from "firebase/database";

const Promotion = {
    add: async (data) => {
        try {
            const docRef = await addDoc(collection(db, "subscription"), {
                img: data.img,
                link: data.link,
            });
            console.log("Document written with ID: ", docRef.id);
            return data;
        } catch (error) {
            console.error("Error adding document: ", error);
            return error;
        }
    },

    get: async (id) => {
        try {
            const docRef = doc(db, "subscription", id);
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

    set: async (id, data) => {
        try {
            const docRef = doc(db, "subscription", id);
            await setDoc(docRef, data);
            console.log("Document updated with ID: ", id);
            return data;
        } catch (error) {
            console.error("Error updating document: ", error);
            return error;
        }
    },

    getAll: async () => {
        try {
            const subscriptions = [];
            const querySnapshot = await getDocs(query(collection(db, "subscription"), orderBy("price", "asc")));
            querySnapshot.forEach((doc) => {
                subscriptions.push({ id: doc.id, ...doc.data() });
            });
            return subscriptions;
        } catch (error) {
            console.error("Error getting documents: ", error);
            return error;
        }
    },
}

export default Promotion;