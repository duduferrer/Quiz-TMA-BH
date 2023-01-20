
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "quizappbh.firebaseapp.com",
  projectId: "quizappbh",
  storageBucket: "quizappbh.appspot.com",
  messagingSenderId: "787319811699",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-7K2KJW06FC"
};


export const app = initializeApp(firebaseConfig);
