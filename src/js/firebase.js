import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBH8wU30GdqXR1_zjs9oCNmLoMsY0KqzHc",
  authDomain: "ease-7f317.firebaseapp.com",
  projectId: "ease-7f317",
  storageBucket: "ease-7f317.appspot.com",
  messagingSenderId: "672496361182",
  appId: "1:672496361182:web:f2fe928fc36237d1896c4f",
  measurementId: "G-YPCEGS2713"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }
