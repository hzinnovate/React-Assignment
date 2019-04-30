import firebase from 'firebase/app';
// import 'firebase/database';

var config = {
    apiKey: "AIzaSyDcE22D9cctjzVTakjC1DU1CcSlNEpfbJg",
    authDomain: "learn-react-7f0a9.firebaseapp.com",
    databaseURL: "https://learn-react-7f0a9.firebaseio.com",
    projectId: "learn-react-7f0a9",
    storageBucket: "learn-react-7f0a9.appspot.com",
    messagingSenderId: "225730043440"
  };
export default firebase.initializeApp(config)