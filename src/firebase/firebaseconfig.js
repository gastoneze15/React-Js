import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA46wt_HVl_sUEH1qD1YxjYojxTIzwnfr0",
    authDomain: "react-js-3ca17.firebaseapp.com",
    projectId: "react-js-3ca17",
    storageBucket: "react-js-3ca17.firebasestorage.app",
    messagingSenderId: "135113571316",
    appId: "1:135113571316:web:15f7ebf6280748fee397a1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
