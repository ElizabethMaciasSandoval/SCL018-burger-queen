// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH_uNk3wm_vEiDyttLc53ZIdRo-IL6kC4",
  authDomain: "burger-queen-a0c08.firebaseapp.com",
  projectId: "burger-queen-a0c08",
  storageBucket: "burger-queen-a0c08.appspot.com",
  messagingSenderId: "583723238855",
  appId: "1:583723238855:web:2dae992931f43d595005e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};