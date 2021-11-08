import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
// import Index from '../components/Index.vue'
import Home from '../views/Home.vue'
import FAQ from '../views/FAQ.vue'

import Profile from '../views/Profile.vue'
import CreateProfile from '../components/CreateProfile.vue'
import Search from '../components/FilteredSearch.vue'
import Chat from '../views/Chat.vue'
import EditProfile from '../components/EditProfile.vue'
import Testing from '../views/Testing.vue' 


const routes = [
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: "/",
		name: "Login",
		component: Login
	},

	{
		path: '/faq',
		name: 'faq',
		component: FAQ
	},
	{
		path: '/profile/:username?',
		name: 'profile',
		component: Profile
	},
	{
		path: '/createprofile',
		name: 'createprofile',
		component: CreateProfile
	},
	{
		path: '/search/:word?',
		name: 'search',
		component: Search,
	},
	{
		path: '/chat',
		name: 'chat',
		component: Chat
	},
	{
		path: '/editprofile',
		name: 'editprofile',
		component: EditProfile
	},
	{
		path: '/testing',
		name: 'testing',
		component: Testing
	},
	// {
	// 	path: '/:catchAll(.*)',
	// 	name:'NotFound',
	// 	component: NotFound,
	// },
  
  
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router



