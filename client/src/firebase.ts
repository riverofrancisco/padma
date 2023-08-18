import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDoc } from 'firebase/firestore'; 

const {
  REACT_APP_APIKEY,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROYECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESSAGING_SENDER_ID,
  REACT_APP_APP_ID,
  REACT_APP_MEASUREMENT_ID 
} = process.env;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: REACT_APP_APIKEY,
    authDomain:  REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROYECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId:  REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID 
  }; 

  console.log("API Key:", process.env.REACT_APP_API_KEY);
  console.log("Project ID:", process.env.REACT_APP_PROJECT_ID);
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

export const db = getFirestore(app);

export const addorEditLink = async (linkObject: any) => {
  await addDoc(collection(db, "products"), linkObject);
  console. log('new task added')}

export const deleteElement = async (linkObject: any) => {
  await deleteDoc(doc(db, "links", linkObject));
  console. log('new task added')}
