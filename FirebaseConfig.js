import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu22vxNa-YyAQ1QomjXZAlYtOBOerGuyk",
  authDomain: "e-wallet-shecancode.firebaseapp.com",
  projectId: "e-wallet-shecancode",
  storageBucket: "e-wallet-shecancode.appspot.com",
  messagingSenderId: "846757638778",
  appId: "1:846757638778:web:17c322d8ec554d1b7e41c3",
  measurementId: "G-BQDFRP173N"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
