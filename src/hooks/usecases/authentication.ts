import * as firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "~/infrastructures/firebase";

export const useUser = () => {
  const [data, isLoading, error] = useAuthState(auth);
  return { data, isLoading, error };
};

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.languageCode = 'ja';
  return auth.signInWithPopup(provider);
}

export const signOut = () => auth.signOut();
