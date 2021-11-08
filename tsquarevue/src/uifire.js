import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA1PJclAOm-RuTEGEaq8tM4CVkPE4GIwQM",
    authDomain: "bt3103-final-project-bc034.firebaseapp.com",
    projectId: "bt3103-final-project-bc034",
    storageBucket: "bt3103-final-project-bc034.appspot.com",
    messagingSenderId: "726547598812",
    appId: "1:726547598812:web:0ff2869d0b048a8f40d319",
    measurementId: "G-T20L1MB3G1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const app = firebase
export const db = firebase.firestore()
export const storageRef = firebase.storage().ref()

export const usersRef = db.collection('profiles')
export const roomsRef = db.collection('chatRooms')
export const messagesRef = roomId => roomsRef.doc(roomId).collection('messages')

export const filesRef = storageRef.child('files')

export const dbTimestamp = app.firestore.FieldValue.serverTimestamp()
export const deleteDbField = app.firestore.FieldValue.delete()
