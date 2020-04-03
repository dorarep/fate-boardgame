import * as firebase from 'firebase';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.APP_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

const firebaseApp = firebase.initializeApp(config);
export const auth = firebaseApp.auth();
export const firestore = firebaseApp.firestore();
