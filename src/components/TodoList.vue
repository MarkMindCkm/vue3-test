<template>
    <div class="todo-container">
        <div class="todo-header">
            <input type="text" v-model="todoText" @keydown.enter='addTodo'>
            <button @click="addTodo">添加待办项目</button>
        </div>

        <div class="todo-list">
            <TodoItem :todo="todo" :key="todo.id" v-for="todo in todoListStore.todolist" />
        </div>

        <div class="todo-footer">
            <span>总数：{{ todoListStore.todolist.length }}</span> |
            <span>已完成：{{ todoListStore.completeTodos.length }}</span> |
            <span>未完成：{{ todoListStore.notCompleteTodos.length }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoListStore } from '../stores/todoLists'
import TodoItem from './TodoItem.vue'

const todoListStore = useTodoListStore();

const todoText = ref('');

function addTodo() {
    if (todoText.value) {
        todoListStore.add({
            id: +new Date(),
            todo: todoText.value,
            compolete: false
        });
        todoText.value = '';
    }
}

</script>

<style scoped>
.todo-header {
    margin-bottom: 20px;
}
.todo-header input {
    height: 30px;
    min-width: 200px;
    margin-right: 10px;
}

.todo-header button {
    height: 30px;
    min-width: 100px;
}
.todo-footer {
    margin-top: 20px;
}
</style>