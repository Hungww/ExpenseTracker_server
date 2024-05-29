import { collection, setDoc, doc, getDoc, getDocs, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase.util.js";

const Promotion = {
    add: async (data) => {
        try {
            const docRef = await addDoc(collection(db, "promotions"), {
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
            const docRef = doc(db, "promotions", id);
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

    getAll: async () => {
        try {
            const promotions = [];
            const querySnapshot = await getDocs(collection(db, "promotions"));
            querySnapshot.forEach((doc) => {
                promotions.push(doc.data());
            });
            return promotions;
        } catch (error) {
            console.error("Error getting documents: ", error);
            return error;
        }
    },
}

export default Promotion;