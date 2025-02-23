// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOZPeiZN5pXEx96w-7Lpq3oTnQHoKI0hM",
  authDomain: "sample-cacbd.firebaseapp.com",
  projectId: "sample-cacbd",
  storageBucket: "sample-cacbd.firebasestorage.app",
  messagingSenderId: "165702314298",
  appId: "1:165702314298:web:6519f60193732187520803",
  measurementId: "G-0NPTSL65WZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { db, auth };
