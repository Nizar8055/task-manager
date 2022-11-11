// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRFZkgkLNyZoTq8Rjq_EWT0yQekeieDv0",
  authDomain: "task-manager-e3b89.firebaseapp.com",
  databaseURL: "https://task-manager-e3b89-default-rtdb.firebaseio.com",
  projectId: "task-manager-e3b89",
  storageBucket: "task-manager-e3b89.appspot.com",
  messagingSenderId: "1027108958023",
  appId: "1:1027108958023:web:2df57d03b06f9bb1c9e662",
  measurementId: "G-9HLVNDQ8HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };