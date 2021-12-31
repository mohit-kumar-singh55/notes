import {initializeApp} from "firebase/app";
import {getAuth} from  "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";
import config from "./config";

const firebase = initializeApp(config);

const auth = getAuth(firebase);
const db = getFirestore(firebase);

export { auth, db };