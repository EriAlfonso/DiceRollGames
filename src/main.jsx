import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUPIsr-WKn_jdJmFxN38ub837vIPmL9eA",
  authDomain: "boardgames-26b95.firebaseapp.com",
  projectId: "boardgames-26b95",
  storageBucket: "boardgames-26b95.appspot.com",
  messagingSenderId: "324110716731",
  appId: "1:324110716731:web:6961cf904201b833e3711e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
