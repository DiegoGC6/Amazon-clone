import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth} from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEgjQDYLdp-0OurBy_rWc4Ev4ce9y6Uqc",
    authDomain: "e-clone-9c5cf.firebaseapp.com",
    projectId: "e-clone-9c5cf",
    storageBucket: "e-clone-9c5cf.appspot.com",
    messagingSenderId: "551573850717",
    appId: "1:551573850717:web:740793b77673b373a21bb4",
    measurementId: "G-JHG629W1Z3"
  };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };