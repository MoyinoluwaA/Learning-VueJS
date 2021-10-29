<template>

	<div class="container">
        <div class="mx-3">
			<div>
				<h1 class="text-green fw-bold text-center mb-5">About</h1>
				<div class="col-lg-8 mx-auto">
					<p>
						Hello once again. My name is Moyinoluwa Adenuga. I started my coding journey September, 2020. It has been an 
						exciting one for me and learning new things keeps it fun. The curiousity to find out how web and mobile applications
						were being created spurred my journey into the tech space.
					</p>
					<p>
						I am a web developer currently into front end technologies but also learning backend to become a Fullstack Developer. 
						I have had the privilege of learning under great organisations like Pearls Africa, Dufuna and currently Enyata. 
					</p>
					<p>
						Core skills includes but are not limited to:
							<ul>
								<li>Implementing Pixel Perfect replication of UI designs</li>
								<li>Creating Responsive Websites</li>
								<li>Good Communication skills </li>
								<li>Willingness to learn</li>
							</ul> 
					</p>
					<p>
						Technologies I use mostly are: 
						<ul>
							<li v-for='(framework, index) in technologies' :key='index'>{{ framework }}</li>
						</ul>
					</p>
					<p>
						Now, you know me. If you would like to talk, please visit the contact section and reach out to me or contact me via my social links.
					</p>
					<p>Check out my <a href='https://drive.google.com/file/d/1xE6jPAa6Uh7rVwHk75HEcXdYWiUVjsY9/view' target='_blank'>CV</a></p>
				</div>
			</div>

            <div class="text-center mt-5">
				<p class="fs-2">Want to Learn about Enyata? Click <router-link :to='routePath.AboutEnyata'>here</router-link></p>
			</div>

			<router-view />
        </div>
    </div>

</template>


<script>

import { routePath } from '../../router/routePath'

export default {
	name: 'About',
    data() {
        return {
			technologies: [
				'ReactJS',
				'NodeJS'
			],
            routePath
        }
    }
}
</script>