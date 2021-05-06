import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBuK1btiYkx3MpSmvANlXPRBQskPnAR9HU',
  authDomain: 'fir-40185.firebaseapp.com',
  projectId: 'fir-40185',
  storageBucket: 'fir-40185.appspot.com',
  messagingSenderId: '564948793220',
  appId: '1:564948793220:web:0055032016b86a5afd0fd1',
  measurementId: 'G-R23JWT8EQL',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
