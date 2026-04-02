// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   

const firebaseConfig = {
  apiKey: "AIzaSyCefNBdCjFg4OW1zOjn7MWBqWY1Q3L_br4",
  authDomain: "film-atlas.firebaseapp.com",
  projectId: "film-atlas",
  storageBucket: "film-atlas.firebasestorage.app",
  messagingSenderId: "656525012830",
  appId: "1:656525012830:web:21fc48b6cbb8cd09b429cf",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);