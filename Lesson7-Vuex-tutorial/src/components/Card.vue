<template>
    <div class="card" style="width: 18rem;">
        <img :src='book.image' class="card-img-top" alt="image of book">
        <div class="card-body">
            <h5 class="card-title fw-bolder">{{ book.title }}</h5>
            <p class="card-text">{{ book.author }}</p>
            <div class="d-flex justify-content-between mt-4">
                <router-link v-if="path === '/'" :to="{ name: 'BookDetails', params: { id: book.id }}" class="btn btn-primary">
                    Read More
                </router-link>
                <button class="btn" :class='btnStyle' @click='handleClick'>{{ btnText }}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data() {
        return {
            path: this.$route.path
        }
    },
    props: {
        book: Object,
        btnText: String,
        btnStyle: String
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
}
</script>

<style>

</style>