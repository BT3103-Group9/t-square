<template>
	<div class="container">
		<div style="text-align:center;">    
		<h1  id = "mainHead">T SQUARE</h1>
		<div id= "firebaseui-auth-container"></div>
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
            // signInSuccessUrl: this.$router.replace("/profile"),
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
	margin-bottom: 50px;;
}

/* #pagecontent{
    height: 100px;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
    
}

#mainHead{
    text-align: center;
    text-shadow: 2px 2px grey;

}

#bg{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}

h5{
    text-align: center;
    background-color:rgb(194, 202, 188) ;
} */
</style>