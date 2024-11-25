import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdTMSJuAXluGdrQk6aAxPTszRme0YbKfA",
  authDomain: "jsproject-e6692.firebaseapp.com",
  projectId: "jsproject-e6692",
  storageBucket: "jsproject-e6692.firebasestorage.app",
  messagingSenderId: "847960636309",
  appId: "1:847960636309:web:06e0cdc6327acbcf66949c",
  measurementId: "G-DK3XLS078M"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
