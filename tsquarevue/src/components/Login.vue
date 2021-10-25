<template>
	<div class="container">
		<div style="text-align:center;">    
            <h1  id="mainHead">T SQUARE</h1>
            <img src="../assets/transform-text.png" alt="">
            <div id="firebaseui-auth-container"></div>
            <i>Scroll down to find out more about us</i>
		</div>

        <div class="about">
            <h1>Our Mission</h1>
            <p>To make learning affordable and accessible to everyone.</p>

            <h1>Our Motivation</h1>
            <p>T Square's users can play dual roles in tutoring other users and seeking tutoring services in other skills.We want to create a community of users who can learn new skills from one another. 
	    Our primary objective is to allow users to seek tutoring services from one another at no commission rate.</p>

            <h1>Our Team</h1>
            <p>Our team consists of dedicated members from all walks of life, who work continuously to build this platform and grow our community of users</p>
      </div>
        
		<Footer/>
	</div>
</template>

<script>
import Footer from './Footer.vue'
import firebase from '../uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default {

    name: "Login",
	
	components: {
		Footer,
	},

    mounted() {
        var ui = firebaseui.auth.AuthUI.getInstance();
        console.log("first ui is", ui)
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth()); // Initialize the FirebaseUI Widget using Firebase
            console.log("Inside !ui is ", ui)
        }

        var uiConfig = {
            signInSuccessUrl: '/home',
            signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]          
        };

        ui.start("#firebaseui-auth-container", uiConfig)
    }

}
</script>





<style scoped>

#firebaseui-auth-container{
	margin-top: 50px;;
	margin-bottom: 30px;;
}

#mainHead{
    text-align: center;
    text-shadow: 2px 2px grey;

}

/* Footer {
	position: absolute;
	bottom:0;
	left:0;
	width:100%;
	height:300px;
} */

</style>
