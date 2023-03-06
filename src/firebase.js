import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";

// require("dotenv").config();

const firebaseConfig = {
  apiKey2:process.env.REACT_APP_APIKEY,
  authDomain:process.env.REACT_APP_AUTHDOMAIN,
  projectId2: process.env.REACT_APP_PROJECTID,
  storageBucket2: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId2: process.env.REACT_APP_MESSAGINGSENDERID,
  appId2:process.env.REACT_APP_APPID,
  measurementId2: process.env.REACT_APP_MEASUREMENTID
};
console.log(process.env.REACT_APP_APIKEY);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();