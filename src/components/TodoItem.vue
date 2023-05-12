<template>
    <div :class="'todo-item ' + (todo.complete ? 'done' : '')">
        <input type="checkbox" :checked="todo.complete" @change="change($event, todo)" />
        <span>{{ todo.todo }}</span>
        <button @click="deleteTodo(todo)">删除</button>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { todoItem, useTodoListStore } from '../stores/todoLists';

defineProps<{
    todo: todoItem
}>()


const todoListStore = useTodoListStore();

function change(e: any, todo: todoItem) {
    todoListStore.changeTodo(todo.id, e.target.checked);
}

function deleteTodo(t: todoItem) {
    todoListStore.remove(t);
}

</script>

<style scoped>
.todo-item {
    display: flex;
    line-height: 30px;
    margin-bottom: 10px;
}

.todo-item.done span {
    text-decoration: line-through;
    color: #ccc;
}

.todo-item input {
    margin-right: 10px;
}

.todo-item button {
    margin-left: 10px;
}
</style>