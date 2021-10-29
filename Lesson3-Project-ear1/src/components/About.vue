<template>
    <div class="container">
        <div class="row justify-content-between about">
            <div class="col-lg-6">
                <AboutText 
                    beforeGreenText="Get in touch with those that"
                    greenText=" inspire "
                    afterGreenText="you."
                    aboutText="ear1 provides a more efficient and faster way for you to reach out to those who inspires you, either in your career, or any other field of interest, and build great relationships with them."
                    :aboutTextClass="aboutTextStyle"
                />
            </div>
            <div class="col-lg-6">
                <div class="image-box mt-0 mx-auto">
                    <img src='../assets/images/person1.jpg' alt="person-1" />
                </div>
            </div>
        </div>
        <div class="row justify-content-between about">
            <div class="col-lg-6 order-lg-last">
                <AboutText 
                    beforeGreenText="You have"
                    greenText=" zero "
                    afterGreenText="chances of not being replied."
                    aboutText="Sending a DM should no more be an issue of shooting your shot or trying your luck. You’re paying, so you’re definitely going to get a response, and not just a response, but a conversation."
                    :aboutTextClass="aboutTextStyle"
                />
            </div>
            <div class="col-lg-6">
                <div class="image-box mt-0 mx-auto">
                    <img src='../assets/images/person2.jpg' alt="person-2" />
                </div>
            </div>
        </div>
        <div class="row about justify-content-center">
            <div class="col-lg-7">
                <AboutText 
                    beforeGreenText="There’s no"
                    greenText=" better way "
                    afterGreenText="of reaching out to those who inspires you."
                    aboutText="Ear1 lets influencers charge you a small fee to have a conversation with them. Being required to pay filters out all the unserious people so your favourite influencers can respond to you faster."
                    aboutTextClass="mx-auto about-text-last text-center"
                    aboutHeadingClass="mx-5"
                />
            </div>
            <div class="col-lg-7">
                <div class="mx-auto image-box">
                    <img src='../assets/images/person3.jpg' alt="person-3" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AboutText from './AboutText.vue'

export default {
    data() {
        return {
            aboutTextStyle: 'text-center text-lg-start'
        }
    },
    components: {
        AboutText
    }
}
</script>

<style>

</style>