<template>

    <button type="button" class="btn mt-4" :class="{ disabled : !isValidated }" :disabled='!isValidated' @click.prevent='submitForm'>
        {{ buttonText }}
    </button>

</template>

<script>
export default {
    name: 'Button',
    props: {
        buttonText: String,
        isValidated: Boolean,
        submitForm: Function
    }
}
</script>