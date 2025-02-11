import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBIwhlqybWc2venGziQ6x8QiTGj00Zi-uc",
  authDomain: "fooddeliveryapp-e4268.firebaseapp.com",
  projectId: "fooddeliveryapp-e4268",
  storageBucket: "fooddeliveryapp-e4268.firebasestorage.app",
  messagingSenderId: "1062482890689",
  appId: "1:1062482890689:web:3197df91da9b59f23ca940"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()