<template>
    <div>
        <h1>Welcome to Vue CLI</h1>
        <p>Have fun</p>
        <button>Welcome {{ name }}</button>
        <p>My fullname is {{ fullName }} </p>
        <p>It is year {{ year }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: 'Moyinoluwa',
            lastName: 'Adenuga',
            name: 'Moyin'
        }
    },
    computed: {
        fullName() {
            return `${this.firstName} ${this.lastName}`
        },
        year() {
            return new Date().getFullYear()
        }
    }
}
</script>

<style scoped>
p {
    color: red;
    font-size: 20px;
}
</style>