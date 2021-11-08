<template>
	<NavBar/>
	<div>
		<div
			class="app-container"
			style="margin-top: 100px"
		>
			<!-- can remove resetData, showoptions-->

			<!-- can remove theme-->

			<chat-container
				v-if="showChat"
				:current-user-id="currentUserId"
				:theme="theme" 
				:is-device="isDevice"
				@show-demo-options="showDemoOptions = $event"
			/>

			
		</div>
	</div>
	<Footer/>
</template>

<script>
import ChatContainer from '../components/ChatContainer.vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'

import { getAuth, onAuthStateChanged } from "firebase/auth";


export default {
	components: {
		ChatContainer,
		NavBar,
		Footer
	},

	data() {
		return {
			theme: 'light',
			showChat: true,
			currentUserId: '', 
			user:false, 
			isDevice: false,
			showDemoOptions: true,
			updatingData: false
		}
	},

	computed: {
		showOptions() {
			return !this.isDevice || this.showDemoOptions
		}
	},

	watch: {
		currentUserId() {
			this.showChat = false
			setTimeout(() => (this.showChat = true), 150)
		}
	},

	mounted() {
		const auth = getAuth(); 
		onAuthStateChanged(auth, (user) => {
        if (user) {
            this.user = user;      
            }
        });
		this.getID()
		this.isDevice = window.innerWidth < 500
		window.addEventListener('resize', ev => {
			if (ev.isTrusted) this.isDevice = window.innerWidth < 500
		})
	},

	methods: {
		getID(){
    		const currentUserEmail = getAuth().currentUser.email;
			const currentID = String(currentUserEmail).split("@")[0]
			this.currentUserId = currentID
			console.log(currentID)
		},
	}
}
</script>

<style lang="scss">
body {
	background: #fafafa;
	margin: 0;
}

input {
	-webkit-appearance: none;
}

.app-container {
	font-family: 'Quicksand', sans-serif;
	padding: 20px 30px 30px;
}

.app-mobile {
	padding: 0;

	&.app-mobile-dark {
		background: #131415;
	}

	.user-logged {
		margin: 10px 5px 0 10px;
	}

	select {
		margin: 10px 0;
	}

	.button-theme {
		margin: 10px 10px 0 0;

		.button-github {
			height: 23px;

			img {
				height: 23px;
			}
		}
	}
}

.user-logged {
	font-size: 12px;
	margin-right: 5px;
	margin-top: 10px;

	&.user-logged-dark {
		color: #fff;
	}
}

select {
	height: 20px;
	outline: none;
	border: 1px solid #e0e2e4;
	border-radius: 4px;
	background: #fff;
	margin-bottom: 20px;
}

.version-container {
	padding-top: 20px;
	text-align: right;
	font-size: 14px;
	color: grey;
}
</style>
