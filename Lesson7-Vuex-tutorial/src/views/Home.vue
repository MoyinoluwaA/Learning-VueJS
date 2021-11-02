<template>

	<div class="home">
		<div class="container">
			<div class="heading mb-5">
				<h1 class="fw-bold">Book Store</h1>
				<p>Your Number 1 store for the best books</p>
			</div>
			<p v-if='getBooks.length === 0' class="fs-1 mt-5 fw-bold">You have no book added yet</p>
			<div v-else class="row">
				<div class="col-4" v-for='(book, index) in getBooks' :key='index'>
					<Card :book='book' btnText='Delete' btnStyle="btn-danger" @click='deleteBook(book.id)'/>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from '../components/Card.vue'

export default {
	name: 'Home',
	components: {
		Card
	},
	computed: {
		...mapGetters(['getBooks'])
	},
	methods: {
        ...mapActions(['deleteBook'])
    }
}

</script>