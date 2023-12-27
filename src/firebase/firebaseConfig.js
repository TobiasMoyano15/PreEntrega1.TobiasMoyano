import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC35Gc3sF3oxHvFbAg6jrH0HR6Fd-pbydc",
  authDomain: "ecommerce-coder-e6051.firebaseapp.com",
  projectId: "ecommerce-coder-e6051",
  storageBucket: "ecommerce-coder-e6051.appspot.com",
  messagingSenderId: "536366826986",
  appId: "1:536366826986:web:5d2025d1d45664609a5e93"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };