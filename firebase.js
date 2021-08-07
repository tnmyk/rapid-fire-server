const firebase = require("firebase");
require("firebase/firestore");
// require("firebase/analytics");

var firebaseConfig = {
  apiKey: "AIzaSyD3x-RsUOX8Bs5cNA7Hb4j-OIZ0Rio-jcM",
  authDomain: "rapid-fire-2201d.firebaseapp.com",
  projectId: "rapid-fire-2201d",
  storageBucket: "rapid-fire-2201d.appspot.com",
  messagingSenderId: "692827131014",
  appId: "1:692827131014:web:06c638ab6573b881c51507",
  measurementId: "G-5M1DL8XG2S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

module.exports=db;