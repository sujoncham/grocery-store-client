// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAep9V6fcWCkHUd-fMiCZyFWl8FSTvXgJQ",
  authDomain: "warehouse-management-ser-f94b6.firebaseapp.com",
  projectId: "warehouse-management-ser-f94b6",
  storageBucket: "warehouse-management-ser-f94b6.appspot.com",
  messagingSenderId: "825815686161",
  appId: "1:825815686161:web:8501ab0dfe3aa800f925b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;