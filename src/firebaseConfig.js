
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz59Cu-IA9svcOkTpl-eQJxIXptKk0NVo",
  authDomain: "firechat-99df9.firebaseapp.com",
  projectId: "firechat-99df9",
  storageBucket: "firechat-99df9.firebasestorage.app",
  messagingSenderId: "615615014052",
  appId: "1:615615014052:web:e284cde102815f365cb231"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);
export {auth, googleProvider, db};
