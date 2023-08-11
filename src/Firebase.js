import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBzXji1PpZ9OKLmEwWG2cj9Pw6klXUpUzk",
    authDomain: "timer-app-f7a92.firebaseapp.com",
    projectId: "timer-app-f7a92",
    storageBucket: "timer-app-f7a92.appspot.com",
    messagingSenderId: "925408295673",
    appId: "1:925408295673:web:d8404d13e2d90e3f6d4028",
    measurementId: "G-PH9BWW16P9"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;