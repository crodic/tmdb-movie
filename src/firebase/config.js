import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_WEB_KEY_FIREBASE,
    authDomain: "crodic-5826c.firebaseapp.com",
    databaseURL: "https://crodic-5826c-default-rtdb.firebaseio.com",
    projectId: "crodic-5826c",
    storageBucket: "crodic-5826c.appspot.com",
    messagingSenderId: "86729453635",
    appId: "1:86729453635:web:2157982b3d7ebcfbdce4f6",
    measurementId: "G-XRV2B2DF1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);