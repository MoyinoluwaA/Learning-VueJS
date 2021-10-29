<template>
    <div>
        <h2>Event Binding</h2>
        <button @click="incrementCount">
            You have clicked {{ counter }} times
        </button>
        <h1>{{ number }}</h1>
        <div class="buttons">
            <button @click="increase(1)">Increase by 1</button>
            <button @click="decrease(1)">Decrease by 1</button>
            <button @click="increase(10)">Increase by 10</button>
            <button @click="decrease(10)">Decrease by 10</button>
        </div>
        <h2>List of users</h2>
        <ul>
            <li v-for="(user, index) in users" :key='index'>
                Name: {{ user.name }}
                <br />
                Email: {{ user.email }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'User-List',
    props: {
        users: Array
    },
    data() {
        return {
            counter: 0,
            number: 20
        }
    },
    methods: {
        incrementCount() {
            this.counter++
        },
        increase(val) {
            this.number += val
        },
        decrease(val) {
            this.number -= val
        }
    }
}
</script>

<style>

</style>