
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDCISpy1YM29Ows88U93Xj5SWCkyZOY6FM",
  authDomain: "whatsapp-2fef4.firebaseapp.com",
  projectId: "whatsapp-2fef4",
  storageBucket: "whatsapp-2fef4.appspot.com",
  messagingSenderId: "1098181808885",
  appId: "1:1098181808885:web:463db5574d2a7c79f0abbc",
  measurementId: "G-2N1N3JEY79"
};

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);