// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-K26h_Tms0ErVvekNulKtXtmyPBHIbgQ",
  authDomain: "simple-firebase-8c7ff.firebaseapp.com",
  projectId: "simple-firebase-8c7ff",
  storageBucket: "simple-firebase-8c7ff.firebasestorage.app",
  messagingSenderId: "854500228515",
  appId: "1:854500228515:web:6a96f00310091b73daae16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);