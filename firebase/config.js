import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyChiZdO8SReQF0ET0ATOlfDp03owmcsYbA",
  authDomain: "reactnative-mobile-chat-app.firebaseapp.com",
  projectId: "reactnative-mobile-chat-app",
  storageBucket: "reactnative-mobile-chat-app.appspot.com",
  messagingSenderId: "356173390112",
  appId: "1:356173390112:web:8407200f24674f1da23745",
  measurementId: "G-RZS4EPE41G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Export Firebase services
export const db = getFirestore(app);
export const usersRef = collection(db,'users');
export const roomRef = collection(db,'rooms');
export { auth, getFirestore, getStorage };


