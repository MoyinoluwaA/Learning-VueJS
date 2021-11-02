<template>

    <div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-6">
                    <img :src='selectedBook.image' :alt='selectedBook.title' class="w-100"/>
                </div>
                <div class="col-6">
                    <div>
                        <p>{{ selectedBook.description }}</p>
                        <h5 class="card-title fw-bolder">{{ selectedBook.title }}</h5>
                        <p class="card-text">{{ selectedBook.author }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'BookDetails',
    computed: {
        ...mapGetters(['getBookById']),
        selectedBook() {
            const id = this.$route.params.id
            const book = this.getBookById(id)
            return book
        }
    }
}
</script>