// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChbQG4yUMk2kUchH7Y9fsEyPhmZQ44TFc",
  authDomain: "ecomproject-c7ff8.firebaseapp.com",
  projectId: "ecomproject-c7ff8",
  storageBucket: "ecomproject-c7ff8.firebasestorage.app",
  messagingSenderId: "286354798222",
  appId: "1:286354798222:web:1178aaf53c5861a90f7bdf",
  measurementId: "G-FK7SHGX2SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const db = getFirestore(app);