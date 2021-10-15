import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confg";
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
