import AsyncStorage from '@react-native-async-storage/async-storage';
import {initializeApp} from 'firebase/app'
import { initializeAuth,getReactNativePersistance } from 'firebase/auth';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
          apiKey: "AIzaSyChiZdO8SReQF0ET0ATOlfDp03owmcsYbA",
          authDomain: "reactnative-mobile-chat-app.firebaseapp.com",
          projectId: "reactnative-mobile-chat-app",
          storageBucket: "reactnative-mobile-chat-app.appspot.com",
          messagingSenderId: "356173390112",
          appId: "1:356173390112:web:8407200f24674f1da23745",
          measurementId: "G-RZS4EPE41G"
        };



const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
          persistence: getReactNativePersistance(AsyncStorage)
})
export const db = getFirestore(app)
export const userRef = collection(db,'users')
export const roomRef = collection(db,'rooms')
