<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
	<div class="container">
		<div class="mt-5 mb-5 topdiv" style="text-align:center;">    
            <img src="../assets/LogoBlack.png" alt="" style="max-height: 400px; max-width: 400px;">
            <div id="firebaseui-auth-container"></div>
            <i>Scroll down to find out more about us!</i>
		</div>

        <div class="about mt-5 fadethisdiv animate__fadeInLeft">
            <h1>Our Mission</h1>
            <p>To make learning affordable and accessible to everyone.</p>

            <h1>Our Motivation</h1>
            <p>T Square's users can play dual roles in tutoring other users and seeking tutoring services in other skills. We want to create a community of users who can learn new skills from one another. Our primary objective is to allow users to seek tutoring services from one another at no commission rate.</p>

            <h1>Our Team</h1>
            <p>Our team consists of dedicated members from all walks of life, who work continuously to build this platform and grow our community of users</p>
      </div>
        
		<Footer/>
        <BackToTop/>
	</div>
</template>

<script>
import Footer from './Footer.vue'
import BackToTop from './BackToTop.vue'
import firebase from '../uifire.js'
import 'firebase/compat/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import 'animate.css'


// import $ from 'jquery'

export default {

    name: "Login",
	
	components: {
		Footer,
        BackToTop
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

        // $(window).scroll(function() {
        //     console.log($(window).scrollTop());
        //     var topDivHeight = $(".topdiv").height();
        //     var viewPortSize = $(window).height();
            
        //     var triggerAt = 150;
        //     var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

        //     if ($(window).scrollTop() >= triggerHeight) {
        //         $('.fadethisdiv').css('visibility', 'visible').hide().fadeIn();
        //         $(this).off('scroll');
        //     }
        // });

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

/* .topdiv {
    position:relative;
    height:100%;
    text-align:center;
    font-size:24px;
}
.fadethisdiv {
    height:100%;
    text-align:center;
    font-size:24px;
    visibility:hidden;
} */
</style>
