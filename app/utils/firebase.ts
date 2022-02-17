import { initializeApp } from 'firebase/app'
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAOmoQIQAsc_rcsgY4nMTQjTN-MklSoNHs",
  authDomain: "bank-c47ee.firebaseapp.com",
  projectId: "bank-c47ee",
  storageBucket: "bank-c47ee.appspot.com",
  messagingSenderId: "578594942064",
  appId: "1:578594942064:web:dfc366b94d0bfffceb18b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let auth = getAuth()

export let register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)

export let login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)

export let logout = signOut(auth)

export let db = getFirestore()