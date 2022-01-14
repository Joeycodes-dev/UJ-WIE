import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBWadsZFyx-xaP9lLMurvO6PtWcbDFaw90",
    authDomain: "ujwilrock.firebaseapp.com",
    projectId: "ujwilrock",
    storageBucket: "ujwilrock.appspot.com",
    messagingSenderId: "411116047389",
    appId: "1:411116047389:web:d2b398e15e91cf8f768af4",
    measurementId: "G-PDSFF4RCJQ"
  };

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let storage = firebase.storage();


export default {
  firebase, db, storage
}