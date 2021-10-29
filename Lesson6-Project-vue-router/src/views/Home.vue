<template>

	<div>
		<div class="container-fluid">
			<div class='row flex-column-reverse flex-md-row'>
				<div class='col-12 col-md-6'>
					<div>
						<img src="/Images/Moyin.jpg" alt="Moyin" class='w-100'>
					</div>
				</div>
				<div class="col-12 col-md-6">
					<div class="ms-5 mt-5 pt-5">
						<div>
							<p>Hello! I am Moyin!</p>
							<span> A professional developer</span>
							<p class='location'>Lagos, Nigeria.</p>
							<p>ReactJS, NodeJS</p>
							<p>Need my services?</p>
							<router-link :to='routePath.Contact'>
								<div>
									<Button 
										buttonText="Contact Me"
										class="text-white bg-green"
									/>
								</div>
							</router-link>
						</div>

						<div class='mt-5'>
							<p>Connect with me:</p>
							<ul class="d-flex list-unstyled">
								<li v-for="(social, index) of socialMedia" :key="index" class="me-3">
									<a class="contact-link" :href="social.link" target="_blank">
										<i class="bi fs-3" :class="social.icon" ></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

import { routePath } from '../router/routePath'
import Button from '../components/Button.vue'

export default {
	name: "Home",
	components: {
		Button
	},
	data() {
		return {
			routePath,
			socialMedia: [
				{
					link: 'https://www.linkedin.com/in/moyinoluwa-adenuga/',
					icon: 'bi-linkedin'
				},
				{
					link: 'https://twitter.com/moyinoluwa_',
					icon: 'bi-twitter'
				},
				{
					link: 'https://github.com/MoyinoluwaA',
					icon: 'bi-github'
				},
				{
					link: 'mailto:dayoh14@gmail.com',
					icon: 'bi-at'
				},
				{
					link: 'https://wa.link/h5vxc9',
					icon: 'bi-whatsapp'
				}
			]
		}
	}
}

</script>