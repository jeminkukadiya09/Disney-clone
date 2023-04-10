import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBcVCI3UWljsf5IYWN2O7s-CxpBHuEPqiM",
    authDomain: "disneyplus-clone-cc688.firebaseapp.com",
    projectId: "disneyplus-clone-cc688",
    storageBucket: "disneyplus-clone-cc688.appspot.com",
    messagingSenderId: "545430551565",
    appId: "1:545430551565:web:7b37576be74c83b23aa944",
    measurementId: "G-WGRRDM0KZS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;