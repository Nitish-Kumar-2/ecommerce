import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5gTlAO1r-19WwEmAKibO2pqVWXvU0MdQ",
  authDomain: "ecom-b735f.firebaseapp.com",
  projectId: "ecom-b735f",
  storageBucket: "ecom-b735f.appspot.com",
  messagingSenderId: "776753490148",
  appId: "1:776753490148:web:a1f9afed2973986be0e4f1",
  measurementId: "G-RMQKNX537Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;