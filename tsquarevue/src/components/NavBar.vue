<template>
<header id="topBackground" v-if="user">
	<div id="firstContainer"> 
		<router-link id="navHome" to="/home"><img id="brandlogo" src="../assets/transform-text.png" alt=""></router-link> 
		<p id="navLink"><Logout/></p>
		<p id="navLink"> | </p>
		<router-link id="navLink" to="/faq">FAQ</router-link> 
		<p id="navLink"> | </p>
		<router-link id="navLink" to="/messages">Messages</router-link>
		<p id="navLink"> | </p>
		<router-link id="navLink" to="/profile">Tutor Profile</router-link>
		
	</div>

	<div style="max-width: 100%; margin: 20px; text-align: center;">
		<div id="input-icons">
			<i class="fa fa-search icon"></i>
			<input id="search" type="text" name="q" placeholder="What do you like to learn today?">
		</div>
	</div>
</header>
</template>

<script>

import { getAuth, onAuthStateChanged } from "firebase/auth";
import Logout from './Logout.vue'

export default {
    name:'NavBar',
	components: {
		Logout
	},

    data() {
        return {
            user:false,                      
        }
    },

  	mounted() {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
		if (user) {
			this.user = user;      
		}
		})
  	}, 
}
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap";
@import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css';
@import "https://fonts.googleapis.com/css?family=Montserrat";
@import "./css/demo.css";
@import "./css/style.css";
</style>