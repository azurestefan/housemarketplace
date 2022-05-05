import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBT_aJaQz0WXTqc3WHth1NKUDzRP21dXSY",
  authDomain: "house-marketplace-app-504b7.firebaseapp.com",
  projectId: "house-marketplace-app-504b7",
  storageBucket: "house-marketplace-app-504b7.appspot.com",
  messagingSenderId: "725774284096",
  appId: "1:725774284096:web:646c55d500dba9315f36a5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
