import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfbZaMRzu0U_LaUqjN_n2zlZWaqQbIxG0",
  authDomain: "lms-aed72.firebaseapp.com",
  projectId: "lms-aed72",
  storageBucket: "lms-aed72.appspot.com",
  messagingSenderId: "488498647850",
  appId: "1:488498647850:web:8291fd0b21f7cdf0450453",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
