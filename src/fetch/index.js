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

export const writeTransactions = async (collectionName, data, userId) => {
  try {
    const docRef = await addDoc(collection(firestoreDB, collectionName), {
      ...data,
      user: doc(firestoreDB, "users", userId)
    });
    console.log("transaction registered successfully");
    // let arr = [];
    // const response = await getDocs(collection(firestoreDB, collectionName));
    // response.forEach((doc) => {
    //   arr.push({ id: doc.id, data: doc.data() });
    // });

    // if (documentSnapshot.exists()) {
    //   await updateDoc(
    //     doc(firestoreDB, collectionName, "0fEUAbPJFhF2QoTdn2OL"),
    //     { amount: 900 }
    //   );
    //   console.log("Document updated successfully");
    // } else {
    //   console.log("Document does not exist");
    // }
    // console.log(arr[0].user["_key"].path.segments[6]);
  } catch (error) {
    console.log(error);
  }
};

export const readUsers = async () => {
  let arr = [];

  await getDocs(collection(firestoreDB, "users"))
    .then((res) => {
      res.forEach((doc) => {
        arr.push({ id: doc.id, data: doc.data() });
      });
    })
    .catch((error) => {
      console.error("Error getting users: ", error);
    });
  return arr;
};
