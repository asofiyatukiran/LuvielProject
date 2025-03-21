// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDONQ0uwdTQo_WoEJ9es3MZJV5aP99I0UA",
  authDomain: "luviel-c932f.firebaseapp.com",
  projectId: "luviel-c932f",
  storageBucket: "luviel-c932f.firebasestorage.app",
  messagingSenderId: "611193587311",
  appId: "1:611193587311:web:c3dc2b003fc888d3986f9a",
  measurementId: "G-4P108TRLGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDONQ0uwdTQo_WoEJ9es3MZJV5aP99I0UA",
    authDomain: "luviel-c932f.firebaseapp.com",
    projectId: "luviel-c932f",
    storageBucket: "luviel-c932f.firebasestorage.app",
    messagingSenderId: "611193587311",
    appId: "1:611193587311:web:c3dc2b003fc888d3986f9a",
    measurementId: "G-4P108TRLGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
