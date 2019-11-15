import firebase from 'firebase';

const cfg = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

firebase.initializeApp(cfg);
export const firebaseRTD = firebase.database();
export const firebaseFireStore = firebase.firestore();
export const firebaseAuth = firebase.auth();