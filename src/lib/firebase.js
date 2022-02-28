import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { configs } from 'eslint-plugin-prettier';

const config = {
  
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };