<template>

    <div>
        <div class="container">
            <h2 class="text-center mb-5">Deleted Books</h2>
            <p v-if='getDeletedBooks.length === 0' class="fs-1 mt-5 fw-bold">No item in recycle bin yet</p>
            <div class="row">
                <div class="col-4" v-for='(book, index) in getDeletedBooks' :key='index'>
                    <Card :book='book' btnText='Restore' btnStyle="btn-secondary" @click="restoreBook(book.id)" />
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Card from '../components/Card.vue'

export default {
    name: 'RecycleBin',
    components: {
        Card
    },
    computed: {
		...mapGetters(['getDeletedBooks'])
	},
    methods: {
        ...mapActions(['restoreBook'])
    }
}
</script>