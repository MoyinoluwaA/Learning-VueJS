<template>
    <div>
        Welcome to my dashboard
        <nav id="nav">
            <router-link :to="{name: 'dashboard-home'}">Dashboard Home</router-link> |
            <router-link :to="{name: 'user-dashboard'}">User Dashboard</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>