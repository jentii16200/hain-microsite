import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDny6UIXoFYN-5i1wG03DfZPC0QohJRlbc",
  authDomain: "hain-402aa.firebaseapp.com",
  projectId: "hain-402aa",
  storageBucket: "hain-402aa.appspot.com",
  messagingSenderId: "689954200164",
  appId: "1:689954200164:web:598341c4d5237c7c1ddd71",
  measurementId: "G-1SZSDD5WF0",
};

export const db = initializeApp(firebaseConfig);

// export const auth = initializeApp.auth();
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore;
export const apoy = app.firestore();
export const auth = app.auth();
export const fb = firebase;
export const storage = app.storage;
export default app;
