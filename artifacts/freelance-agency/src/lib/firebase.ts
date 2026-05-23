import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Surface missing config clearly in the console
const missing = Object.entries(firebaseConfig)
  .filter(([, v]) => !v)
  .map(([k]) => k);

if (missing.length > 0) {
  console.error(
    "%c[TanuDevWorks] Firebase NOT initialised — missing env vars:",
    "color:red;font-weight:bold",
    missing
  );
  console.error(
    "%c[TanuDevWorks] Form submissions will FAIL until these are set in Replit Secrets.",
    "color:red"
  );
} else {
  console.log(
    "%c[TanuDevWorks] Firebase config loaded ✓",
    "color:green;font-weight:bold",
    { projectId: firebaseConfig.projectId }
  );
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
export const firebaseReady = missing.length === 0;

/**
 * FIRESTORE SECURITY RULES — set these in Firebase Console → Firestore → Rules:
 *
 * rules_version = '2';
 * service cloud.firestore {
 *   match /databases/{database}/documents {
 *     match /orders/{id}        { allow create: if true; }
 *     match /contacts/{id}      { allow create: if true; }
 *     match /consultations/{id} { allow create: if true; }
 *   }
 * }
 */
