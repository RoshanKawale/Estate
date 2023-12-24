// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeCGyW7X7E5mz1DXta5F4rQU32azg-OkU",
  authDomain: "estate-305dc.firebaseapp.com",
  projectId: "estate-305dc",
  storageBucket: "estate-305dc.appspot.com",
  messagingSenderId: "1009467234010",
  appId: "1:1009467234010:web:40f342b3ce02c5bf2877e3",
  measurementId: "G-02N8P985B3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);