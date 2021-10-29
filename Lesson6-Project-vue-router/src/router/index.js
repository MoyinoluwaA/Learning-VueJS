import Vue from "vue"
import VueRouter from "vue-router"

import { routePath } from './routePath'

import Home from "../views/Home.vue"
import About from "../views/About/About.vue"
import AboutEnyata from "../views/About/AboutEnyata.vue"
import Contact from "../views/Contact.vue"
import PageNotFound from "../views/PageNotFound.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: routePath.Home,
		name: "Home",
		component: Home,
	},
	{
		path: routePath.About,
		name: "About",
		component: About,
		children: [
			{
				path: "enyata",
				name: "AboutEnyata",
				component: AboutEnyata
			}
		]		
	},
	{
		path: routePath.Contact,
		name: "Contact",
		component: Contact
	},
	{
		path: routePath.PageNotFound,
		name: 404,
		component: PageNotFound
	}
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router