import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from "./context/firebase";
import { firebaseApp, analytics, FieldValue } from "./lib/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebaseApp, analytics, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// client side rendered app: react (cra)
// -> database which is firebase
// -> react-loading-skeleton
// -> tailwind

// architecture
// -> components, constants, context, helpers
// -> lib (firecare is going to live here)
// -> services (firebase functions in here)
// -> styles (tailwind's folders (app/tailwind))
