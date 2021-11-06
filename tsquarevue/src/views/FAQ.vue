<template>
	<NavBar/>
	<img src="../assets/HomePage/LogoWhite.png" style="max-height: 400px; max-width: 400px; padding-top:5%"> 
	<Questions/>
    <Footer/>
</template>

<script>

import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Questions from '../components/Questions.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";

	export default {
		name: "FAQ",

		components: {
			NavBar,
            Footer,
			Questions
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

<style scoped>
#bg { 
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
}

/* Footer {
	position: absolute;
	bottom:0;
	left:0;
	width:100%;
	height:300px;
} */

</style>
