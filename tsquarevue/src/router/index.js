import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'
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
		path: '/index',
		name: 'Index',
		component: Index
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



