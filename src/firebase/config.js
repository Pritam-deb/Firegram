import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';


export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email, displayName, photoURL } = user;
      try {
        await userRef.set({
          displayName,
          email,
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };


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
const provider = firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export { projectStorage, projectFirestore, timestamp, provider };
