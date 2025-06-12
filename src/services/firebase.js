import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, remove, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUGSr_wQc92AA7n45RuShLoYAqFtWXVmU",
  authDomain: "sadaq-96ef3.firebaseapp.com",
  projectId: "sadaq-96ef3",
  storageBucket: "sadaq-96ef3.appspot.com",
  messagingSenderId: "1078203556507",
  appId: "1:1078203556507:web:0184ab304e7c76ff4b9c3e",
  measurementId: "G-YEHHCM849P"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, set, onValue, remove, onChildAdded, onChildChanged, onChildRemoved };