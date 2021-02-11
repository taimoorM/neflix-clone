import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { config } from "../fireBaseConfig";

//seed Db

const firebase = Firebase.initializeApp(config);

export { firebase };
