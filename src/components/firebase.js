// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApH08AWZEdVLYX8uvZ7TaLtpC-w3VJHQ8",
  authDomain: "base-f8f07.firebaseapp.com",
  projectId: "base-f8f07",
  storageBucket: "base-f8f07.appspot.com",
  messagingSenderId: "218880599931",
  appId: "1:218880599931:web:390838f491200b8ff4ffde"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);