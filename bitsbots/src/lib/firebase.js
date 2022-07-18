import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/analytics";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // here i want to import the seed file
// import { seedDatabase } from "../seed";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRXKqImuRiH-ytOCuQ8VG3LPAIuShlyXw",
  authDomain: "bits-bots.firebaseapp.com",
  projectId: "bits-bots",
  storageBucket: "bits-bots.appspot.com",
  messagingSenderId: "741779492266",
  appId: "1:741779492266:web:c746fb230e898686faefd3",
  measurementId: "G-QRN38G4HFQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const analytics = firebaseApp.analytics();
const auth = firebase.auth();

const FieldValue = db.FieldValue;

console.log(db);

// seedDatabase(db, "db");

export { db, analytics, FieldValue, auth };
