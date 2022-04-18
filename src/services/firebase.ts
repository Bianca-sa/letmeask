import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: 'letmeask-b8d74.firebaseapp.com',
  databaseURL: 'https://letmeask-b8d74-default-rtdb.firebaseio.com',
  projectId: 'letmeask-b8d74',
  storageBucket: 'letmeask-b8d74.appspot.com',
  messagingSenderId: '830225750768',
  appId: '1:830225750768:web:568af2cfc6c6883d5b4035',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
