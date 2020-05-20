import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYaxEdF-542n49eujXiKsaK1_1x0yoDyI",
  authDomain: "foodapp-bb6d6.firebaseapp.com",
  databaseURL: "https://foodapp-bb6d6.firebaseio.com",
  projectId: "foodapp-bb6d6",
  storageBucket: "foodapp-bb6d6.appspot.com",
  messagingSenderId: "39385266647",
  appId: "1:39385266647:web:8c3ed3df033c6035987392",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
