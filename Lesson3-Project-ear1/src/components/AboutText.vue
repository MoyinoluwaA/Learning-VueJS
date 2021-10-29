<template>
    <div class="about-text" :class="aboutTextClass">
        <h2 class="about-heading" :class="aboutHeadingClass"> {{ beforeGreenText }} <span class="text--green fst-italic">{{ greenText }}</span>  {{ afterGreenText }} </h2>
        <p class="about-sub-text">{{ aboutText }}</p>
    </div>
</template>

<script>
export default {
    props: {
        beforeGreenText: String,
        greenText: String,
        afterGreenText: String,
        aboutText: String,
        aboutTextClass: String,
        aboutHeadingClass: String
    }
}
</script>

<style>

</style>