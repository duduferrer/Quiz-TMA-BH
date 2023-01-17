// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD09JcAWyxLth0G7bibV-sV495qljM9e_s",
  authDomain: "quizappbh.firebaseapp.com",
  projectId: "quizappbh",
  storageBucket: "quizappbh.appspot.com",
  messagingSenderId: "787319811699",
  appId: "1:787319811699:web:b96971a73f45164ecb8406",
  measurementId: "G-7K2KJW06FC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);