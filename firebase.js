import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Fix the typo here
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBXhI9TMcEJFlS0UJjr91yF0ChJ7Ppzok4",
    authDomain: "fir-proj-2b9e3.firebaseapp.com",
    projectId: "fir-proj-2b9e3",
    storageBucket: "fir-proj-2b9e3.appspot.com",
    messagingSenderId: "1026738954561",
    appId: "1:1026738954561:web:5b1fab7db5e9bafdc741c0",
    measurementId: "G-MFBBJ5B4YC"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };