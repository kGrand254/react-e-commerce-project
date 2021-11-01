import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFVVBtSZ_UThCtTw4uG08dlv9pwiylQrQ",
  authDomain: "e-commerce-react-db-6189a.firebaseapp.com",
  projectId: "e-commerce-react-db-6189a",
  storageBucket: "e-commerce-react-db-6189a.appspot.com",
  messagingSenderId: "419789120974",
  appId: "1:419789120974:web:dc3d52f2a02ab7cd21379f",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
