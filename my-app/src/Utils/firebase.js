// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq__KGDYqRr6DoPCq4-s2J2In7nXctytM",
  authDomain: "nextgpt-598c0.firebaseapp.com",
  projectId: "nextgpt-598c0",
  storageBucket: "nextgpt-598c0.firebasestorage.app",
  messagingSenderId: "127975961795",
  appId: "1:127975961795:web:300aa4e2898492939a1e76",
  measurementId: "G-VW1W547RRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);