import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVlZRSDfJ9UuUMOgql5UaFqH11jc43wAc",
  authDomain: "chat-d251d.firebaseapp.com",
  projectId: "chat-d251d",
  storageBucket: "chat-d251d.appspot.com",
  messagingSenderId: "123512718734",
  appId: "1:123512718734:web:503a7a8f6ccd468c7310df",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Create a root reference
export const storage = getStorage();

//creating a db
export const db = getFirestore();
