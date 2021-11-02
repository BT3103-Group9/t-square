//import { initializeApp } from 'firebase/app';
import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage' 


var firebaseConfig = {
	apiKey: "AIzaSyA1PJclAOm-RuTEGEaq8tM4CVkPE4GIwQM",
	authDomain: "bt3103-final-project-bc034.firebaseapp.com",
	databaseURL: "https://bt3103-final-project-bc034-default-rtdb.firebaseio.com",
	projectId: "bt3103-final-project-bc034",
	storageBucket: "bt3103-final-project-bc034.appspot.com",
	messagingSenderId: "726547598812",
	appId: "1:726547598812:web:0ff2869d0b048a8f40d319",
	measurementId: "G-T20L1MB3G1"
  };
  

app.initializeApp(firebaseConfig)

export const firebase = app
export const db = app.firestore()
export const storageRef = app.storage().ref()

export const usersRef = db.collection('users')
export const roomsRef = db.collection('chatRooms')
export const messagesRef = roomId => roomsRef.doc(roomId).collection('messages')

export const filesRef = storageRef.child('files')

export const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp()
export const deleteDbField = firebase.firestore.FieldValue.delete() 

/* export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)
export const storageRef = getStorage(firebaseApp)

export const usersRef = collection(db, 'users')
export const roomsRef = collection(db, 'chatRooms')
export const messagesRef = roomId => roomsRef.doc(roomId).collection('messages')

export const filesRef = storageRef.child('files')

export const dbTimestamp = firebase.firestore.FieldValue.serverTimestamp()
export const deleteDbField = firebase.firestore.FieldValue.delete() */ 

