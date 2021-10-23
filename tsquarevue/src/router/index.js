import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Messages from '../views/Messages.vue'
import Profile from '../views/Profile.vue'

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



