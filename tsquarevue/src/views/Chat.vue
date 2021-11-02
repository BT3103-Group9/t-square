<template>
	<div>
		<div
			class="app-container"
			:class="{ 'app-mobile': isDevice, 'app-mobile-dark': theme === 'dark' }"
		>
			<div>
				<button @click="resetData">Clear Data</button>
				<button @click="addData" :disabled="updatingData">Add Data</button>
			</div> 
			<span
				v-if="showOptions"
				class="user-logged"
				:class="{ 'user-logged-dark': theme === 'dark' }"
			>
				Logged as
			</span>
			<select v-if="showOptions" v-model="currentUserId">
				<option v-for="user in users" :key="user._id" :value="user._id">
					{{ user.username }}
				</option>
			</select>

			<chat-container
				v-if="showChat"
				:current-user-id="currentUserId"
				:theme="theme"
				:is-device="isDevice"
				@show-demo-options="showDemoOptions = $event"
			/>

			<!-- <div class="version-container">
				v1.0.0
			</div> -->
		</div>
	</div>
</template>

<script>
import { roomsRef, usersRef } from '../firebase_chat.js'
import ChatContainer from './../components/ChatContainer.vue'

export default {
	components: {
		ChatContainer
	},

	data() {
		return {
			theme: 'light',
			showChat: true,
			users: [
				{
					_id: '6R0MijpK6M4AIrwaaCY2',
					username: 'Luke',
					avatar: 'https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj'
				},
				{
					_id: 'SGmFnBZB4xxMv9V4CVlW',
					username: 'Leia',
					avatar: 'https://avatarfiles.alphacoders.com/184/thumb-184913.jpg'
				},
				{
					_id: '6jMsIXUrBHBj7o2cRlau',
					username: 'Yoda',
					avatar:
						'https://vignette.wikia.nocookie.net/teamavatarone/images/4/45/Yoda.jpg/revision/latest?cb=20130224160049'
				}
			],
			currentUserId: '6R0MijpK6M4AIrwaaCY2',
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
		this.isDevice = window.innerWidth < 500
		window.addEventListener('resize', ev => {
			if (ev.isTrusted) this.isDevice = window.innerWidth < 500
		})
	},

	methods: {
		resetData() {
			roomsRef.get().then(val => {
				val.forEach(async val => {
					const ref = roomsRef.doc(val.id).collection('messages')

					await ref.get().then(res => {
						if (res.empty) return
						res.docs.map(doc => ref.doc(doc.id).delete())
					})

					roomsRef.doc(val.id).delete()
				})
			})

			usersRef.get().then(val => {
				val.forEach(val => {
					usersRef.doc(val.id).delete()
				})
			})
		},
		async addData() {
			this.updatingData = true

			const user1 = this.users[0]
			await usersRef.doc(user1._id).set(user1)

			const user2 = this.users[1]
			await usersRef.doc(user2._id).set(user2)

			const user3 = this.users[2]
			await usersRef.doc(user3._id).set(user3)

			await roomsRef.add({
				users: [user1._id, user2._id],
				lastUpdated: new Date()
			})
			await roomsRef.add({
				users: [user1._id, user3._id],
				lastUpdated: new Date()
			})
			await roomsRef.add({
				users: [user2._id, user3._id],
				lastUpdated: new Date()
			})
			await roomsRef.add({
				users: [user1._id, user2._id, user3._id],
				lastUpdated: new Date()
			})

			this.updatingData = false
		}
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
