import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase app configs
const firebaseConfig = {
  apiKey: "AIzaSyBWnG5WI_P8bsqRi7GOstnNJQcHsrWWbDQ",
  authDomain: "tapslot-4f502.firebaseapp.com",
  projectId: "tapslot-4f502",
  storageBucket: "tapslot-4f502.firebasestorage.app",
  messagingSenderId: "1036695448635",
  appId: "1:1036695448635:web:d4c3edf2fa104f7185801e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);