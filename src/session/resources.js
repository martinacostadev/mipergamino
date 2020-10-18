import { auth, providers } from "../firebase";

export default {
  signIn: () => auth.signInWithPopup(providers.phone),
  signOut: () => auth.signOut(),
  onChange: (callback) => auth.onAuthStateChanged(callback),
};       