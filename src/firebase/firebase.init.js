// Danger
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfuFx1VNC62RFZGlfevNIvpthxAgMgzZA",
  authDomain: "fir-auth-integration-7a8b5.firebaseapp.com",
  projectId: "fir-auth-integration-7a8b5",
  storageBucket: "fir-auth-integration-7a8b5.firebasestorage.app",
  messagingSenderId: "1094245481879",
  appId: "1:1094245481879:web:3631462ed5bc6b486398d2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
