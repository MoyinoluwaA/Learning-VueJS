<template>

    <div class="container">
        <div class="mx-3">
            <h1 class="text-green fw-bold text-center mb-5">Contact me</h1>
            <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
                <Form />
            </div>
        </div>
    </div>

</template>


<script>

import Form from '../components/Form.vue'

export default {
    name: 'Contact',
    components: {
        Form
    }
}
</script>