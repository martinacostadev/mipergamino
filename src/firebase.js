import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB9Ni7evDV5EqV2eQdEhkYFv-pL5ybJYy0",
  authDomain: "miciudad-52ac5.firebaseapp.com",
  databaseURL: "https://miciudad-52ac5.firebaseio.com",
  projectId: "miciudad-52ac5",
  storageBucket: "miciudad-52ac5.appspot.com",
  messagingSenderId: "858489590654",
  appId: "1:858489590654:web:717909ca87fd6bcbbf192f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const database = firebase.firestore();
const auth = firebase.auth();
const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export { database, auth, providers };
export default firebase;
