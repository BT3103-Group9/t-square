import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../views/Home.vue'

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



