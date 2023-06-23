// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence} from "firebase/auth"
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTEr-WJfg-exryLAgpDTE0tYdt_sTAABY",
  authDomain: "fitnesstracker-1a683.firebaseapp.com",
  projectId: "fitnesstracker-1a683",
  storageBucket: "fitnesstracker-1a683.appspot.com",
  messagingSenderId: "274971518391",
  appId: "1:274971518391:web:e4ccdc5e2ee401b7e87432",
  measurementId: "G-9R0FDJ732G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const db = getFirestore(app);
console.log(db)

export  {app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence, db};