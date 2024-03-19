import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc
} from "firebase/firestore";
import { firestoreDB } from "../../FirebaseConfig";

export const writeTransactions = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(firestoreDB, collectionName), {
      ...data
      // user: doc(firestoreDB, "users", userId)
    });
    let arr = [];
    // const response = await getDocs(collection(firestoreDB, collectionName));
    // response.forEach((doc) => {
    //   arr.push({ id: doc.id, data: doc.data() });
    // });
    await getDocs(collection(firestoreDB, collectionName))
      .then((res) => {
        res.forEach((doc) => {
          arr.push({ id: doc.id, data: doc.data() });
        });
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
    const documentSnapshot = await getDoc(
      doc(firestoreDB, collectionName, "0fEUAbPJFhF2QoTdn2OL")
    );

    if (documentSnapshot.exists()) {
      await updateDoc(
        doc(firestoreDB, collectionName, "0fEUAbPJFhF2QoTdn2OL"),
        { amount: 900 }
      );
      console.log("Document updated successfully");
    } else {
      console.log("Document does not exist");
    }
    // console.log(arr[0].user["_key"].path.segments[6]);
  } catch (error) {
    console.log(error);
  }
};
