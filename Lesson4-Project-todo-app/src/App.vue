<template>
	<div id="app">
		<h1 class="heading fw-bold text-center pt-5">Todo</h1>
		<main class="col-sm-8 col-lg-6 col-xl-5 text-center rounded bg-white pt-3 pb-5 px-3 px-sm-5 mt-5 mx-auto">
			<Form :todos="todos" />
			<Todolist :todos="todos" />
		</main>
	</div>
</template>

<script>
import Form from './components/Form.vue'
import Todolist from './components/Todolist.vue'

export default {
	name: 'App',
	data() {
		return {
			todos: []
		}
	},
	components: {
		Form,
		Todolist
	}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@import './styles.scss'
</style>
