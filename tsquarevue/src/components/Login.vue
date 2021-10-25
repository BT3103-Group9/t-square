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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatem placeat. Molestias neque hic fuga maxime minus dolorum cum eum doloremque voluptatibus dolorem velit, illo suscipit possimus laborum sed expedita.</p>

            <h1>Our Motivation</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatem placeat. Molestias neque hic fuga maxime minus dolorum cum eum doloremque voluptatibus dolorem velit, illo suscipit possimus laborum sed expedita.</p>

            <h1>Our Team</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatem placeat. Molestias neque hic fuga maxime minus dolorum cum eum doloremque voluptatibus dolorem velit, illo suscipit possimus laborum sed expedita.</p>

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