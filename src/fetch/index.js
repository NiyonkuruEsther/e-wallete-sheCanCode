import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { firestoreDB } from "../../FirebaseConfig";

export const writeTransactions = async (collectionName, data, userId) => {
  try {
    const docRef = await addDoc(collection(firestoreDB, collectionName), {
      ...data,
      user: doc(firestoreDB, "users", userId)
    });
    console.log(docRef.id);
  } catch (error) {
    console.log(error);
  }
};
