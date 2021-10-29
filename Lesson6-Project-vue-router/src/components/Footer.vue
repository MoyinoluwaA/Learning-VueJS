<template>

    <footer class="bg-green py-3 mt-5">
        <p class="text-center text-white mb-0">&copy; {{ date }} Moyinoluwa Adenuga</p>
    </footer>

</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            date: this.getYear()
        }
    },
    methods: {
        getYear() {
            return new Date().getFullYear()
        }
    }
}
</script>