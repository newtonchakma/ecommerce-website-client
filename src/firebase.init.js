// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzqk2kgcHiDD6Qcqwt3z8nEyX7tuh9uEA",
  authDomain: "ecommerce-website-95bd2.firebaseapp.com",
  projectId: "ecommerce-website-95bd2",
  storageBucket: "ecommerce-website-95bd2.appspot.com",
  messagingSenderId: "876192695921",
  appId: "1:876192695921:web:e4ca8ce045734f9f1e3dd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;