// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1wKemQ0SFbdz9EqpzVeGmQFNXk8kpKX4",
  authDomain: "chat-app-43527.firebaseapp.com",
  projectId: "chat-app-43527",
  storageBucket: "chat-app-43527.appspot.com",
  messagingSenderId: "414606377089",
  appId: "1:414606377089:web:d10f65385d5e534ba74d80",
  measurementId: "G-9TBN2C3V75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, analytics, auth, db };