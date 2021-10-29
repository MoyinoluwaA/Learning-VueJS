<template>
    <div class="box">
        <div class="container">
            <div class="box-green text-white">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="w-50">
                        <h2 class="fw-bold mb-3 pb-1">Build great relationships with those you admire.</h2>
                        <p>With ear1, replies to your DMs are guaranteed!</p>
                    </div>
                    <div>
                        <Button :btnStyle='btnStyle' class="me-3" :storeSrc="storeLogo.apple" storeName=" App store" />
                        <Button :btnStyle='btnStyle' :storeSrc="storeLogo.googlePlay" storeName=" Google play" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
    data() {
        return {
            btnStyle: 'btn--gray',
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