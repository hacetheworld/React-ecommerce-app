import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyB53GRHPBcZMj5nBwzRtJ9-KeARBCZW1uE",
    authDomain: "crown-db-4a61a.firebaseapp.com",
    databaseURL: "https://crown-db-4a61a.firebaseio.com",
    projectId: "crown-db-4a61a",
    storageBucket: "crown-db-4a61a.appspot.com",
    messagingSenderId: "233883322108",
    appId: "1:233883322108:web:da236cae52c81f65613979",
    measurementId: "G-CES049GM5D"
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;