// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4rjjHapBIz5liMuhqK1HOMAz6n6fuMho",
  authDomain: "webaudio-a9be6.firebaseapp.com",
  projectId: "webaudio-a9be6",
  storageBucket: "webaudio-a9be6.appspot.com",
  messagingSenderId: "666098080127",
  appId: "1:666098080127:web:8df00a86a49b5b44f9e24a",
  measurementId: "G-DJJV7F4HTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// const analytics = getAnalytics(app);
// const storage = firebase.storage()
export  default storage;