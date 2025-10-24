// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWta5dD_cFGo621iqm-9jzpYsoEPSLgS0",
  authDomain: "notion-clone-cb6dc.firebaseapp.com",
  projectId: "notion-clone-cb6dc",
  storageBucket: "notion-clone-cb6dc.firebasestorage.app",
  messagingSenderId: "957910004948",
  appId: "1:957910004948:web:aebcc1bb8cca487e32b741",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
