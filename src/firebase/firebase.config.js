// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoKoqOb3kBHHj8VvMjfAc4zMFW1qjL1sY",
  authDomain: "culinary-sage.firebaseapp.com",
  projectId: "culinary-sage",
  storageBucket: "culinary-sage.appspot.com",
  messagingSenderId: "184316087417",
  appId: "1:184316087417:web:4eec91129d65d2269258a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;