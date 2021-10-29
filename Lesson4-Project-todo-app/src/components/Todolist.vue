<template>
    <div class="mt-4">
        <ul class="list-group list-group-flush">
            <li v-for="(todo, index) in todos" :key="index" class="list-group-item mb-3 rounded">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-start">
                        <button class="btn px-1 py-0 me-3" @click="toggleCompleted(index)">
                            <i class="bi fs-4" :class="todo.completed ? isCompleted : isTodo"></i>
                        </button>
                        <span class="text-start pt-1" :class="todo.completed && 'text-strikethrough text-danger'">{{ todo.item }}</span>
                    </div>
                    <div class="d-flex ms-3">
                        <button class="btn px-1" @click="deleteTodo(index)">
                            <i class="bi bi-pencil-square fs-4"></i>
                        </button>
                        <button class="btn px-1" @click="deleteTodo(index)">
                            <i class="bi bi-trash-fill fs-4" ></i>
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Todolist',
    data() {
        return {
            isTodo: 'bi-square',
            isCompleted: 'bi-check-square'
        }
    },
    props: {
        todos: Array
    },
    methods: {
        deleteTodo(index) {
            this.todos.splice(index, 1)
        },
        toggleCompleted(index) {
            this.todos[index].completed = !this.todos[index].completed
        }
    }
}
</script>

<style>

</style>