// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFps8tA_91K1OMt4LS6KIleU5k5m1UuV4",
  authDomain: "healm-prototype.firebaseapp.com",
  projectId: "healm-prototype",
  storageBucket: "healm-prototype.appspot.com",
  messagingSenderId: "701302284739",
  appId: "1:701302284739:web:af1978ae03853db6539d76",
  measurementId: "G-QY2KPM3YLQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// AuthFF
const auth = getAuth();

// probably better to just do the imports in the pages themselves
// but it really doesn't matter
export {
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
