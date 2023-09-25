import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_4oWNCs_6YalpUNec_osx7dhNY9dwqeg",
    authDomain: "ecommerce-daibattista.firebaseapp.com",
    projectId: "ecommerce-daibattista",
    storageBucket: "ecommerce-daibattista.appspot.com",
    messagingSenderId: "698432391842",
    appId: "1:698432391842:web:ff4c5c3ca9e12d96c9a5fb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)