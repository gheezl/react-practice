// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-7WCex6SVdx1RzSMD3rEsVSrxb19iupI",
  authDomain: "weather-app-696dd.firebaseapp.com",
  projectId: "weather-app-696dd",
  storageBucket: "weather-app-696dd.appspot.com",
  messagingSenderId: "771950927958",
  appId: "1:771950927958:web:0417fa94d938eb0e219bf7",
  measurementId: "G-269QCZWG0L"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);