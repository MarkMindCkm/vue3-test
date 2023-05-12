import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export type todoItem = {
    id: number | string,
    todo: string,
    complete: boolean
}

export const useTodoListStore = defineStore('todoList', () => {
    let todolist: todoItem[] = reactive([]);

    function add(todo: todoItem) {
        todolist.push(todo)
    }

    function remove(todo: todoItem) {
        var i = todolist.indexOf(todo);
        if (i > -1) {
            todolist.splice(i, 1);
        }
    }

    function changeTodo(id: string | number, done: boolean) {
        todolist.forEach(todo => {
            if (todo.id == id) {
                todo.complete = done;
            }
        })
    }

    let completeTodos = computed(() => todolist.filter(todo => todo.complete));
    let notCompleteTodos = computed(() => todolist.filter(todo => !todo.complete));

    return { todolist, add, remove, changeTodo, completeTodos, notCompleteTodos }
})
