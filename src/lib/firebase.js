import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { configs } from 'eslint-plugin-prettier';

const config = {
  apiKey: "AIzaSyABGvgrES-fWJl_cheJRNCWRNYMKBicUyk",
  authDomain: "insta-clone-cfc6b.firebaseapp.com",
  projectId: "insta-clone-cfc6b",
  storageBucket: "insta-clone-cfc6b.appspot.com",
  messagingSenderId: "1094668964235",
  appId: "1:1094668964235:web:092bdcfa9c48f1bddd1f8e",
  measurementId: "G-5EM9FHWD9C"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };