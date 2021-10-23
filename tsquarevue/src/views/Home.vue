<template>

	<h3>This is Home Page</h3>
	<img id ="bg" src="https://www.streamscheme.com/wp-content/uploads/2020/04/pepega.png" alt="">

</template>

<script>

import { getAuth, onAuthStateChanged } from "firebase/auth";

	export default {
		name: "Home",

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