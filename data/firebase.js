// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage();
export {auth,db, storage} ;

//custom hook


//logout
export function Logout(){
  signOut(auth);
}

// Storage
// export async function upload(file, currentUser, setLoading) {
//   const fileRef = ref(storage,'profilePhotos' + currentUser.uid + '.png');

//   setLoading(true);
  
//   const snapshot = await uploadBytes(fileRef, file);
//   const photoURL = await getDownloadURL(fileRef);

//   updateProfile(currentUser, {photoURL});
  
//   setLoading(false);
//   alert("Uploaded file!");
// }