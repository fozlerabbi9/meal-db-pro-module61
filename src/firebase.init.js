// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,

  // apiKey: "AIzaSyCd1sGjfFPt9AWkvcnFoYtZp0B0eOuo8gw",
  // authDomain: "meal-db-pro-module61.firebaseapp.com",
  // projectId: "meal-db-pro-module61",
  // storageBucket: "meal-db-pro-module61.appspot.com",
  // messagingSenderId: "598019833928",
  // appId: "1:598019833928:web:b6fc6e4e7f9f2e6635d87d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;