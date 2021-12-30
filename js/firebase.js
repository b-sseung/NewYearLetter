// // Import the functions you need from the SDKs you need
// import { initializeApp } from "./firebase/app";
// import { getAnalytics } from "./firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var code_array = [];
var letter_array = [];
var position = 0;

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
firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

var db = firebase.firestore();

var settings = {
  timestampsInSnapshots: true,
};

//이건 그냥 하나만 가져오는 것
// var docRef = db.collection("IdPw").doc("test");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.id + ", " + doc.get("id"));
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });



//이게 전체
db.collection("Code").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());

      code_array[position] = doc.get("code");
      letter_array[position] = doc.get("text");

      position++;
  });
});

export { position, code_array, letter_array };