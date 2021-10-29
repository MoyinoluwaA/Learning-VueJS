<template>

    <nav class="navbar navbar-expand-lg navbar-light py-1">
        <div class="container ps-1 my-5">
            <a class="navbar-brand" href="#">
                <span>Moyinoluwa</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item pe-2 me-5">
                        <router-link :to='routePath.Home'>Home</router-link>
                    </li>
                    <li class="nav-item pe-2 me-5">
                        <router-link :to='routePath.About'>About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to='routePath.Contact'>Contact me</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
</template>

<script>

import { routePath } from '../router/routePath'

export default {
    name: 'Navbar',
    data() {
        return {
            routePath
        }
    }
}
</script>