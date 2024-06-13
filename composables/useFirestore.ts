import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu4upRY19CIMLCnHeGlyIY1ZwTijNJNYc",
  authDomain: "nuxt-langchain.firebaseapp.com",
  projectId: "nuxt-langchain",
  storageBucket: "nuxt-langchain.appspot.com",
  messagingSenderId: "422160415018",
  appId: "1:422160415018:web:3c42b1eda9d280bb814653",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const storage = getStorage(app, "gs://nuxt-langchain.appspot.com");