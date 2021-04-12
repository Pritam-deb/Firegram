import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3Q62YulETs6LOlyNWusIS9pqgHAkUXug",
    authDomain: "pritam-firegram-56f12.firebaseapp.com",
    projectId: "pritam-firegram-56f12",
    storageBucket: "pritam-firegram-56f12.appspot.com",
    messagingSenderId: "969535136836",
    appId: "1:969535136836:web:259f4b3a6c2bdba6c38811"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
