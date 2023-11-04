// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Constants from 'expo-constants'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAB5tbzQvhLGHwGD-zS4a-2FOQBNPcGsig",
  authDomain: "store-36136.firebaseapp.com",
  projectId: "store-36136",
  storageBucket: "store-36136.appspot.com",
  messagingSenderId: "192388568341",
  appId: "1:192388568341:web:4fd89d0d97f99d9e3fc51c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export {
    db
   
}