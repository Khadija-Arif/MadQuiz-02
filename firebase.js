// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, browserLocalPersistence } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
 apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id",
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase authentication with React Native persistence
const auth = initializeAuth(firebaseApp, {
  persistence: browserLocalPersistence, // Use browserLocalPersistence for React Native
});

// Initialize Firebase Storage
const storage = getStorage(firebaseApp);

export { auth, storage };
