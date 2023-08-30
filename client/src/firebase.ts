import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDoc, onSnapshot, getDocs, QuerySnapshot } from 'firebase/firestore'; 

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

export const deleteProduct = async (element: any) => {
  if (window.confirm("are you sure you want to delete this link?")) {
      if (Array.isArray(element)) {
        element.forEach((el) => {window.alert(`Product ${el.id} deleted.`)
    console. log('new task deleted')})
      } else {
        window.alert(`Product ${element.id} deleted.`)
    console. log('new task deleted')}

  
    //await deleteDoc(doc(db, "links", id));
    }
  
  
  }

 
export const getProducts = async () => {
  const products = await getDocs(collection(db, "products"))
  products.forEach((doc)=> console.log(`${doc.id}, ${doc.data()}`))
  return products
}

export const onUpdate = async () => {
  onSnapshot(collection(db, 'products'), (querySnapshot) => {
    const products: any = [];
    querySnapshot.forEach((doc) => {
    console.log("Current data: ", doc.data());
    products.push({...doc.data()})
  });
  return products
});}