import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdJkRv7CkTvC8_tVPrOrdo9BAwOYT0868",
    authDomain: "instagram-shrikant.firebaseapp.com",
    databaseURL: "https://instagram-shrikant-default-rtdb.firebaseio.com",
    projectId: "instagram-shrikant",
    storageBucket: "instagram-shrikant.appspot.com",
    messagingSenderId: "281498049613",
    appId: "1:281498049613:web:892bccf1e51f0eccfc5004",
    measurementId: "G-98B56B3N08"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;