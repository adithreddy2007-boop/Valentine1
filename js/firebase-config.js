// ============================================================
//  PASTE YOUR FIREBASE CONFIG HERE
//  Firebase Console → Project Settings → Your Apps → Web (</>)
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyDqXQnqdRDa-5MOb2FptHMZEqfKGVAdpcA",
  authDomain: "valentine-app-36ffa.firebaseapp.com",
  projectId: "valentine-app-36ffa",
  storageBucket: "valentine-app-36ffa.firebasestorage.app",
  messagingSenderId: "801271045141",
  appId: "1:801271045141:web:a8fd39f9f15b492c9b421c"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage }     from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const app = initializeApp(firebaseConfig);
export const auth    = getAuth(app);
export const db      = getFirestore(app);
export const storage = getStorage(app);
