// The following code initializes Firebase in a JavaScript application.
// Copied and modified from Firebase setup instructions.

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ2gJ935LpRm3_OUeeNtK3itW47fFqPvE",
  authDomain: "b-assessment.firebaseapp.com",
  projectId: "b-assessment",
  storageBucket: "b-assessment.firebasestorage.app",
  messagingSenderId: "439096483508",
  appId: "1:439096483508:web:33e07473c3f5295ffb81e1",
};

// Initialize Firebase & Prevent re-initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);