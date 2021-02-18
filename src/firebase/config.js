import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAaHj4UtVVQqJhYutKQZAIazwnY5qycfj8",
    authDomain: "sebagram-e215d.firebaseapp.com",
    projectId: "sebagram-e215d",
    storageBucket: "sebagram-e215d.appspot.com",
    messagingSenderId: "520368753558",
    appId: "1:520368753558:web:5a182ea9bd138a36c26bb7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };