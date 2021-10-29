<template>
    <div>
        This is the User dashboard
        <nav id='nav'>
            <router-link :to="{ name: 'single-user', params: { id: 'michael' }}">
                Michael
            </router-link>
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