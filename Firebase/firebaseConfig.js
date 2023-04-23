import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCEhtriMa4otiAOi_ETFK4veqEvdsbmXog",
    authDomain: "foodapp-a5c65.firebaseapp.com",
    projectId: "foodapp-a5c65",
    storageBucket: "foodapp-a5c65.appspot.com",
    messagingSenderId: "63578862922",
    appId: "1:63578862922:web:e237c941352fe8cf52fdb3",
    measurementId: "G-YB7RPWSWVZ"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }