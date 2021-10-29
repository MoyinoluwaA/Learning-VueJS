<template>
    <div>
        Welcome {{ user }}
    </div>
</template>

<script>
export default {
    name: 'SingleUser',
    computed: {
        user() {
            const user = this.$route.params.id.toUpperCase()
            return user
        }
    }
}
</script>

<style>

</style>