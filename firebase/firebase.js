import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBSi4ucgdPCvMWpsI3_H7uOBMU-fw5lWF0",
  authDomain: "chatapp-8b1d0.firebaseapp.com",
  projectId: "chatapp-8b1d0",
  storageBucket: "chatapp-8b1d0.appspot.com",
  messagingSenderId: "248031423236",
  appId: "1:248031423236:web:7c1d22f936d4ff24e87e51",
  measurementId: "G-QG9EZ310S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
