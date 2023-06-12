// import { initializeApp } from 'firebase/app';
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
import 'firebase/firestore';
import 'firebase/auth';
const admin = require("firebase-admin");

const serviceAccount = require("./hain-402aa-firebase-adminsdk-iy0yz-d55386632e.json");


const firebaseConfig = {
    apiKey: "AIzaSyDny6UIXoFYN-5i1wG03DfZPC0QohJRlbc",
    authDomain: "hain-402aa.firebaseapp.com",
    projectId: "hain-402aa",
    storageBucket: "hain-402aa.appspot.com",
    messagingSenderId: "689954200164",
    appId: "1:689954200164:web:598341c4d5237c7c1ddd71",
    measurementId: "G-1SZSDD5WF0",
};
const app = initializeApp(firebaseConfig);

export const db = initializeApp(firebaseConfig);
// export const auth = initializeApp.auth();