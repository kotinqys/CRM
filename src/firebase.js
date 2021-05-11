import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyD4_MinLsYg5cKm-WEUmUC8qCYkif1NGYM",
    authDomain: "web-srm.firebaseapp.com",
    projectId: "web-srm",
    storageBucket: "web-srm.appspot.com",
    messagingSenderId: "164317332836",
    appId: "1:164317332836:web:cae943931ce8b464a6a671",
    measurementId: "G-2QQTDC4MVJ"
});

export default app;