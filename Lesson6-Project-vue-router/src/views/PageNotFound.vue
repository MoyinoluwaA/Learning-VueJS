<template>

    <div class="text-center">
        <p class="fw-bold text-danger mt-4 page-not-found">Oops!!! Page not found</p>
        <p>Please click <router-link :to='routePath.Home'>here</router-link> to redirect to Home Page</p>
    </div>

</template>

<script>

import { routePath } from '../router/routePath'

export default {
	name: 'PageNotFound',
	data() {
        return {
            routePath
        }
    }
}

</script>