import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6LFDhldBdq23_bQ4SOUCSo_GdtJiPNhw",
  authDomain: "dfinancecapital.firebaseapp.com",
  projectId: "dfinancecapital",
  storageBucket: "dfinancecapital.firebasestorage.app",
  messagingSenderId: "97452008968",
  appId: "1:97452008968:web:deab886cfa5b4bb65113bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);