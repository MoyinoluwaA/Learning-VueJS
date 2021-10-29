<template>
    <header>
        <div class="container pt-5">
            <div class="d-flex">
                <div class="pt-5">
                    <img src="images/Davido.png" alt="Davido" class="mt-4"/>
                </div>
                <div class="align-self-end">
                    <img src="images/Shola.png" alt="Shola"/>
                </div>
                <div class="header text-center mx-auto">
                    <h1 class="header-title mb-4">Connect with professionals in your field without getting aired.</h1>
                    <p class="mx-5 px-4 header-text">
                        For a small fee, ear1 allows you to get in touch with professionals in your 
                        field and build quality relationships with them. 
                    </p>
                    <div>
                        <Button :btnStyle='btnStyle' class="me-3" :storeSrc="storeLogo.apple" storeName=" App store" />
                        <Button :btnStyle='btnStyle'  :storeSrc="storeLogo.googlePlay" storeName=" Google play" />
                    </div>
                </div>
                <div class="align-self-end">
                    <img src="images/Moe.png" alt="Moe"/>
                </div>
                <div class="pt-5">
                    <img src="images/Prosper.png" alt="Prosper" class="mt-2"/>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Button from './Button.vue'

export default {
    data() {
        return {
            btnStyle: 'btn--green',
            storeLogo: {
				apple: '/icons/apple.png',
				googlePlay: '/icons/google-play.png'
			}
        }
    },
    components: {
        Button
    }
}
</script>

<style>

</style>