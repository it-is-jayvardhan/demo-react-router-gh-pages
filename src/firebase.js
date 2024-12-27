// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu6N98GnosAdy-CBWoNPA63kkGY75Tjfk",
  authDomain: "ambition-tech-blogs.firebaseapp.com",
  projectId: "ambition-tech-blogs",
  storageBucket: "ambition-tech-blogs.firebasestorage.app",
  messagingSenderId: "436088047748",
  appId: "1:436088047748:web:4a767da3499657f334dad1",
  measurementId: "G-C8DBQGZ22D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);