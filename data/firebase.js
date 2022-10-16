
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC0ZQ6xxWUX5_Gjs14M8WmGklrY8x1vl0w",
  authDomain: "digital-time-frame.firebaseapp.com",
  databaseURL: "https://digital-time-frame-default-rtdb.firebaseio.com",
  projectId: "digital-time-frame",
  storageBucket: "digital-time-frame.appspot.com",
  messagingSenderId: "308799974835",
  appId: "1:308799974835:web:981cdb64662be42d6c6fc6",
  measurementId: "G-NWDFXKRPS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}