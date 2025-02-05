// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADKZ84MpwrR5Dnd8Sje2v0yZeOdIR_dzw",
  authDomain: "dt100-cg.firebaseapp.com",
  databaseURL: "https://dt100-cg-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dt100-cg",
  storageBucket: "dt100-cg.firebasestorage.app",
  messagingSenderId: "199656723326",
  appId: "1:199656723326:web:6691276feb71fb0985d92f",
  measurementId: "G-0JHF5D52DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);