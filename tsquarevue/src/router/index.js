import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
<<<<<<< HEAD
import Index from '../components/Index.vue'
=======


import Home from '../views/Home.vue'

>>>>>>> parent of 7b6d663 (Revert "Merge branch 'main' of https://github.com/bt3013-group9/t-square into main")
import About from '../views/About.vue'
import Messages from '../views/Messages.vue'
import Profile from '../views/Profile.vue'
import CreateProfile from '../components/CreateProfile.vue'


const routes = [
	{
		path: "/",
		name: "Login",
		component: Login
	},
	{
		path: '/home',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: About
	},
	{
		path: '/messages',
		name: 'messages',
		component: Messages
	},
	{
		path: '/profile',
		name: 'profile',
		component: Profile
	},
	{
		path: '/createprofile',
		name: 'createprofile',
		component: CreateProfile
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



