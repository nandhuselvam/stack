
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDgj2wuAfVpy0E5il0cd3IOqWs67_Ltwuc",
  authDomain: "clone-ca466.firebaseapp.com",
  projectId: "clone-ca466",
  storageBucket: "clone-ca466.appspot.com",
  messagingSenderId: "186022793687",
  appId: "1:186022793687:web:f85e83575f666814bffb92"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(App)
const goole