// FirebaseConfig.js
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app"; // Poprawiono import

const firebaseConfig = {
    apiKey: "AIzaSyCZ_XzrJsGQWKLjXYnwObhxooC70hwvJHM",
    authDomain: "lokalnybazarek-2f47c.firebaseapp.com",
    projectId: "lokalnybazarek-2f47c",
    storageBucket: "lokalnybazarek-2f47c.appspot.com",
    messagingSenderId: "233238280173",
    appId: "1:233238280173:web:2efa4984fa1d50841559e4",
    measurementId: "G-6V0SCP5TVP"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  
  export { auth, db, storage, createUserWithEmailAndPassword }; // Dodano eksport funkcji createUserWithEmailAndPassword