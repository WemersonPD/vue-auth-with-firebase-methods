import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBoaL_Pvr-y-Ut6lJ5MN-QSChA9AOoDsI4",
  authDomain: "fir-auth-logins.firebaseapp.com",
  projectId: "fir-auth-logins",
  storageBucket: "fir-auth-logins.appspot.com",
  messagingSenderId: "115821604850",
  appId: "1:115821604850:web:622eb2b7b1c9e820c9056b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;