// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk3wxs4mMcQw9yZ_tgpPeMVoD8I0dA6Y4",
  authDomain: "newyearletter2.firebaseapp.com",
  projectId: "newyearletter2",
  storageBucket: "newyearletter2.appspot.com",
  messagingSenderId: "809499986596",
  appId: "1:809499986596:web:5f295e4df2b7d89e69f431",
  measurementId: "G-T2232ERQY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);