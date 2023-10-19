import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA6H0FyAYTwkBXnOC3Ci6WredAN-t64eXE",
  authDomain: "brand-shop-610c8.firebaseapp.com",
  projectId: "brand-shop-610c8",
  storageBucket: "brand-shop-610c8.appspot.com",
  messagingSenderId: "409775684566",
  appId: "1:409775684566:web:e837a4ca9cb9e7d7ffc277",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
