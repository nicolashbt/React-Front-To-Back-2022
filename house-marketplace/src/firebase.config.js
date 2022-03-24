import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_G66yuhWymvo8dmZZptXFW0ZjZYu0etA",
  authDomain: "house-marketplace-app-d844a.firebaseapp.com",
  projectId: "house-marketplace-app-d844a",
  storageBucket: "house-marketplace-app-d844a.appspot.com",
  messagingSenderId: "24777556827",
  appId: "1:24777556827:web:c8835579376385d9ae907e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()