// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// here i want to import the seed file
import { seedDatabase } from "../seed";

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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const FieldValue = initializeApp.firebase;

// here is where i want to call the seed file (Only once)
// seedDatabase(firebase);

console.log("firebaseApp", firebaseApp);
seedDatabase(firebaseApp);

export { firebaseApp, analytics, FieldValue };
