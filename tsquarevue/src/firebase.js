import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA1PJclAOm-RuTEGEaq8tM4CVkPE4GIwQM",
    authDomain: "bt3103-final-project-bc034.firebaseapp.com",
    projectId: "bt3103-final-project-bc034",
    storageBucket: "bt3103-final-project-bc034.appspot.com",
    messagingSenderId: "726547598812",
    appId: "1:726547598812:web:0ff2869d0b048a8f40d319",
    measurementId: "G-T20L1MB3G1"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
