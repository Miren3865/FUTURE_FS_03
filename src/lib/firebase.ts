import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let app;
try {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
  } else {
    app = getApps()[0];
    console.log('Using existing Firebase app');
  }
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 