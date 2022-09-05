// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAO5najNUAN_yJjPLIdYI--NncvdGW2p-0",
	authDomain: "whenso.firebaseapp.com",
	projectId: "whenso",
	storageBucket: "whenso.appspot.com",
	messagingSenderId: "872368302932",
	appId: "1:872368302932:web:7a216c296d9221f4d0f6c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
