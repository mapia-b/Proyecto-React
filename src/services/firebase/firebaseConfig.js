// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHX41u4MQEQ3rQGsW7sDiUYfyR3Tn7KLM",
  authDomain: "ecommercereact-3a5d0.firebaseapp.com",
  projectId: "ecommercereact-3a5d0",
  storageBucket: "ecommercereact-3a5d0.appspot.com",
  messagingSenderId: "399643146068",
  appId: "1:399643146068:web:67039e51173c7fc009bac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore (app)