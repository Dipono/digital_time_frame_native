import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBJLPMXWKlWkyy7IMi3ZD5ZXZQCRyzXbQY",
  authDomain: "digitaltimeframe.firebaseapp.com",
  projectId: "digitaltimeframe",
  storageBucket: "digitaltimeframe.appspot.com",
  messagingSenderId: "574626253027",
  appId: "1:574626253027:web:5b6c3f4f8e4ba935e49dd6",
  measurementId: "G-0L1CWW768V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}