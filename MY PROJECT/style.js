// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIJ2KdgXFT5tqaaH0ebmG2qYDoDeuKxAo",
  authDomain: "database-29ad3.firebaseapp.com",
  databaseURL: "https://database-29ad3-default-rtdb.firebaseio.com",
  projectId: "database-29ad3",
  storageBucket: "database-29ad3.appspot.com",
  messagingSenderId: "1054210361513",
  appId: "1:1054210361513:web:427a2bc24827eabe8b01b8"
};
import { initializeApp } from "firebase/app";
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const app=document.getElementById('app')
const dbRef = firebase.database()
const messageRef = dbRef.ref('message')

messageRef.once('value').then(function(snap){
  app.innerText=snap.val()
})
