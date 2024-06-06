import {
    collection,
    setDoc,
    doc,
    getDoc,
    addDoc,
    deleteDoc,
    getDocs,
    where,
    query,
} from "firebase/firestore";
import { db } from "../utils/firebase.util.js";

const Transaction = {
    add: async (data) => {
        try {
            const userRef = doc(db, "users", data.user);

            await addDoc(collection(db, "transactions"), {
                category: data.category,
                date: data.date,
                description: data.description,
                isExpense: data.isExpense,
                title: data.title,
                user: userRef,
                value: data.value,
            });
            return data;
        } catch (error) {
            console.error("Error adding document: ", error);
            return error;
        }
    },

    getById: async (id) => {
        try {
            const querySnapshot = await getDocs(collection(db, "transactions"));
            let transactions = [];

            for (const doc of querySnapshot.docs) {
                let user = doc.data().user;

                let userDoc = await getDoc(user);
                user = userDoc.data();

                if (user.uid === id) {
                    transactions.push(doc.data());
                }
            }
            return transactions;
        } catch (error) {
            console.error("Error getting document: ", error);
            return error;
        }
    },
}

export default Transaction;
