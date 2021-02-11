import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//seed Db

//config
const config = {
  apiKey: "AIzaSyA231ZYG5OE5ehZQdmmS1_Ak8Z3t_4tzwE",
  authDomain: "neflix-64562.firebaseapp.com",
  projectId: "neflix-64562",
  storageBucket: "neflix-64562.appspot.com",
  messagingSenderId: "233659191276",
  appId: "1:233659191276:web:84b10c523e3f618842bac9",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
