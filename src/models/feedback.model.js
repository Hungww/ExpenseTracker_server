import { collection, setDoc, doc, getDoc, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../utils/firebase.util.js";

const Feedback = {
    add: async (data) => {
        try {
            data.created_at = Timestamp.now();
            const docRef = await addDoc(collection(db, "feedback"), data);
            return data;
        } catch (error) {
            console.error("Error adding document: ", error);
            return error;
        }
    },

    get: async (id) => {
        try {
            const docRef = doc(db, "feedback", id);
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
            const feedbacks = [];
            const querySnapshot = await getDocs(collection(db, "feedback"));
            querySnapshot.forEach((doc) => {
                feedbacks.push(doc.data());
            });
            return feedbacks;
        } catch (error) {
            console.error("Error getting documents: ", error);
            return error;
        }
    },
}

export default Feedback;