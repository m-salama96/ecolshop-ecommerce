// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYkkX7pf9nlu_6T02VpbYn5ZuSU_cDuj4",
  authDomain: "ecommers-ad996.firebaseapp.com",
  projectId: "ecommers-ad996",
  storageBucket: "ecommers-ad996.firebasestorage.app",
  messagingSenderId: "965824012165",
  appId: "1:965824012165:web:eba2af109877d48cdeaeec",
  measurementId: "G-TDS77D435H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);