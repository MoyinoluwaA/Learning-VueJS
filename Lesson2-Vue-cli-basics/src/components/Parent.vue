<template>
    <div>
        <h1>Binding and Events</h1>
        <ul>
            <li>one-way data binding - props</li>
            <li>two way data binding - v-model</li>
        </ul>

        <UserList :users="users" />
    </div>
</template>

<script>
import UserList from './UserList.vue'
export default {
    name: 'Parent',
    components: {
        UserList
    },
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: 'Michael',
                    email: 'starboy@co.com'
                },
                {
                    id: 2,
                    name: 'Moyin',
                    email: 'moyin@co.com'
                },
                {
                    id: 3,
                    name: 'Ibukun',
                    email: 'ibukun@co.com'
                },
                {
                    id: 4,
                    name: 'Fatomi',
                    email: 'fatomi@co.com'
                }
            ]
        }
    }
}
</script>

<style>

</style>