import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP4NhOY8uQ5-MnNZLDDiQHuZJr92usWc4",
  authDomain: "muvi-app-bb33f.firebaseapp.com",
  projectId: "muvi-app-bb33f",
  storageBucket: "muvi-app-bb33f.appspot.com",
  messagingSenderId: "760467440051",
  appId: "1:760467440051:web:5169a72892fb6aaa660bc6"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
