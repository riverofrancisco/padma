import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; 


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBvymVGBcxdQ5IvBsqcPClRksuk9La89M",
    authDomain: "padmadeco-46204.firebaseapp.com",
    projectId: "padmadeco-46204",
    storageBucket: "padmadeco-46204.appspot.com",
    messagingSenderId: "259848020577",
    appId: "1:259848020577:web:c0674664bf652f30f24020",
    measurementId: "G-149CZ4R73R"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const db = getFirestore(app);
