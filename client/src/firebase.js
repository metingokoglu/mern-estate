// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4cbee.firebaseapp.com",
  projectId: "mern-estate-4cbee",
  storageBucket: "mern-estate-4cbee.appspot.com",
  messagingSenderId: "707023584032",
  appId: "1:707023584032:web:6a17ab99b4baa94eb9f545",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
