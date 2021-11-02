<template>
    <div>
        <h2 class="fw-bold mb-4">Add a Book</h2>
        <form class='form' action="">
            <div class='mb-3'>
                <label for='title' class="form-label">Title</label>
                <input class='form-control' type='text' id='title' v-model='formData.title' />
            </div>
            <div class='mb-3'>
                <label for='author' class="form-label">Author</label>
                <input class='form-control' type='text' id='title' v-model='formData.author' />
            </div>
            <div class='mb-3'>
                <label for='image' class="form-label">Image</label>
                <input class='form-control' type='text' id='image' v-model='formData.image' />
            </div>
            <div class='mb-3'>
                <label for='title' class="form-label">Description</label>
                <textarea class='form-control' v-model='formData.description'></textarea>
            </div>
            <div class="text-center mt-4">
                <button class="btn btn-success" @click.prevent='onSubmit'>Add Book</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AddBook',
    data() {
        return {
            formData: {
                title: '',
                author: '',
                image: '',
                description: ''
            }
        }
    },
    computed: {
        ...mapGetters(['getBooks'])
    },
    methods: {
        ...mapActions(['addBook']),
        onSubmit() {
            const data = {...this.formData}
            this.addBook(data)
            this.resetForm()
        },
        resetForm() {
            this.formData.title = '',
            this.formData.author = '',
            this.formData.image = '',
            this.formData.description = ''
        }
    }
}
</script>