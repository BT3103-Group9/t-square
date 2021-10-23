<template>
	<NavBar/>
	<img id ="bg" src="https://www.streamscheme.com/wp-content/uploads/2020/04/pepega.png" alt="">
    <Footer/>
</template>

<script>

import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

	export default {
		name: "About",

		components: {
			NavBar,
            Footer
		},

		data() {
			return {
				user: false,
				// refreshComp: 0
			}
		},

		mounted() {
			const auth = getAuth()
			onAuthStateChanged(auth, user => {
				this.user = user;
			})
		}
	}

	
</script>

<style>
#bg { 
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}
</style>