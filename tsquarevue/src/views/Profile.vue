<template>
	<NavBar/>
	<div v-if="hasProfile" style="margin-top: 5%">
		<ProfileDisplay/>
	</div>
	<div v-else style="margin-top: 10%">
		<h4>It seems like you have no tutor profile yet. <br> <a href="/createprofile">Click here to create your tutor profile now!</a></h4>
		<br>
	</div>
    <Footer/>
</template>

<script>

import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import ProfileDisplay from '../components/ProfileDisplay.vue'
import firebaseApp from '../firebase.js';
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
	name: "Profile",

	components: {
		NavBar,
		Footer,
		ProfileDisplay
	},

	data() {
		return {
			user: false,
			hasProfile: false
		}
	},

	mounted() {
		const auth = getAuth(); 
		this.fbuser = auth.currentUser.email;
		this.checkProfile(this.fbuser);
	},

	methods: {
		async checkProfile(user) {
			let docs = await getDoc(doc(db, "profiles", user))

			if (docs.exists()) {
				this.hasProfile = true;
			} else {
				console.log("No such document!");
			}
		}
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

Footer {
	position: absolute;
	bottom:0;
	left:0;
	width:100%;
	height:300px;
}

</style>