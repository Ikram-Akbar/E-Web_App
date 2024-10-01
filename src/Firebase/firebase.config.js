import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn0P0XqYfULLW7fGHUrTrlpc52u1KC7YI",
  authDomain: "e-commerce-c0697.firebaseapp.com",
  projectId: "e-commerce-c0697",
  storageBucket: "e-commerce-c0697.appspot.com",
  messagingSenderId: "244822743474",
  appId: "1:244822743474:web:b5251bce2aea11dcd4acab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
