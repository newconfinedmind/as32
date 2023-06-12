// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXMliZ35jrruNwdhldw2nPiJtRT_ms4TA",
  authDomain: "artassign.firebaseapp.com",
  databaseURL: "https://artassign-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "artassign",
  storageBucket: "artassign.appspot.com",
  messagingSenderId: "117657280097",
  appId: "1:117657280097:web:592c4f1b0dc203b12a5420",
  measurementId: "G-13LVKWH4W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);