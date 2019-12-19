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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    // check if user is logged in or not
    if (!userAuth) return;


    // check if user is already exist
    const userRef = firestore.doc(`users/${userAuth.uid}`);


    const snapshot = await userRef.get()
    // if it is not exist then create new user in data base

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);

        }
    }

    return userRef;

}



// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;