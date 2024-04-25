// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQa43QukLrFMqbX0iiLWZbnozchjBz8Oo",
  authDomain: "firstpro-c93e8.firebaseapp.com",
  projectId: "firstpro-c93e8",
  storageBucket: "firstpro-c93e8.appspot.com",
  messagingSenderId: "984624672033",
  appId: "1:984624672033:web:d66b70d67a04cb4370a260",
  measurementId: "G-VHB9Z36FSW"
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase authentication with React Native persistence
const auth = initializeAuth(firebaseApp, {
  persistence: browserLocalPersistence, // Use browserLocalPersistence for React Native
});

// Initialize Firebase Storage
const storage = getStorage(firebaseApp);

export { auth, storage };