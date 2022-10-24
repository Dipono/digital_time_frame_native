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
  apiKey: "AIzaSyC2-FkYwC19hWCJaG6lZx-XfSL8XX7SQA0",
  authDomain: "dtfpro-9e0fd.firebaseapp.com",
  projectId: "dtfpro-9e0fd",
  storageBucket: "dtfpro-9e0fd.appspot.com",
  messagingSenderId: "559189657988",
  appId: "1:559189657988:web:b49f46b390703f096875d1",
  measurementId: "G-C9Z8G3SCF2"
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