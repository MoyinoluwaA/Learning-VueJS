<template>
	<button class="btn btn-custom" :class="btnStyle">
		<div class="d-flex align-items-center">
			<div class="me-2 pe-1">
				<img :src="storeSrc" alt="store logo" />
			</div>
			<div class="btn-text text-start">
				Get it on
				<span class="d-block btn-text-storeName">{{ storeName }}</span>
			</div>
		</div>
	</button>
</template>

<script>
export default {
	props: {
		storeSrc: String,
		storeName: String,
		btnStyle: String,
	}
};
</script>

<style>
</style>