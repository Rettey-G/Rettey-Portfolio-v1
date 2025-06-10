// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYtigtDaCqhrCtMeyTtkEvhtGP9RAz6Vo",
  authDomain: "rettey-portfolio.firebaseapp.com",
  projectId: "rettey-portfolio",
  storageBucket: "rettey-portfolio.appspot.com", // Using .appspot.com as it's common, verify if yours is different
  messagingSenderId: "860953682997",
  appId: "1:860953682997:web:204c073114fe9e1af13d7c",
  measurementId: "G-4EXGTVE36G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized and Analytics started."); // Optional: for checking in browser console
