<template>

    <nav class="py-4">
        <div class="container d-flex justify-content-between">
            <div class="fw-bold fs-3">
                BookStore
            </div>
            <div>
                <ul class="d-flex m-0 list-unstyled">
                    <li class="me-4">
                        <router-link to='/'>Home</router-link>
                    </li>
                    <li class="me-4">
                        <router-link to='/add'>Add Book</router-link>
                    </li>
                    <li>
                        <router-link to='/recycle-bin'>Recycle Bin</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
export default {

}
</script>