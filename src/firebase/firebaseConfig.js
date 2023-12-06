import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC35Gc3sF3oxHvFbAg6jrH0HR6Fd-pbydc",
  authDomain: "ecommerce-coder-e6051.firebaseapp.com",
  projectId: "ecommerce-coder-e6051",
  storageBucket: "ecommerce-coder-e6051.appspot.com",
  messagingSenderId: "536366826986",
  appId: "1:536366826986:web:373141b95ec315e39a5e93"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)