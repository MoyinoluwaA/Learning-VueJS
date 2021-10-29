<template>

    <div class="mb-4">
        <label class="form-label fs-5" :for="identifier">{{ label }}</label>
        <input class="form-control px-4" :id="identifier" name="identifier" :type="type" :placeholder="placeholder" 
            v-bind:value="value" v-on:input="$emit('input', $event.target.value)" required 
        />
    </div>

</template>

<script>
export default {
    name: 'InputField',
    props: {
        label: String,
        identifier: String,
        value: String,
        placeholder: String,
        type: String
    }
}
</script>