import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAHWUEbsWMGRAt07VfxYZ8OK6kuhDjk9zQ",
  authDomain: "ecommercekokotovic.firebaseapp.com",
  projectId: "ecommercekokotovic",
  storageBucket: "ecommercekokotovic.appspot.com",
  messagingSenderId: "495560545973",
  appId: "1:495560545973:web:1c6fd1b0f014491c6d10fc"
};

const app = initializeApp(firebaseConfig)

export const initFirebase = () => app

