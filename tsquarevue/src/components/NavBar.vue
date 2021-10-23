<template>
    <div id ="logged" v-if="user" > 
      	<div id="nav">
			<router-link to="/home">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/messages">Messages</router-link>  |    
			<router-link to="/profile"  >Profile</router-link>  
			<Logout/>
      	</div>
    </div>
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

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
	text-align: center;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>