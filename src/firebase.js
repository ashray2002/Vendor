// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMI0rIE2io4g4_oa0qiNWroCgFRjw-CBw",
  authDomain: "vendor-abc16.firebaseapp.com",
  projectId: "vendor-abc16",
  storageBucket: "vendor-abc16.appspot.com",
  messagingSenderId: "533051117861",
  appId: "1:533051117861:web:d85674f4784c86e253cacc",
  measurementId: "G-B9J2ZWN5F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
