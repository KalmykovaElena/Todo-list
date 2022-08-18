import {Storage} from "../core/storage.js";

export const renderTodos = () => {
    console.log(Storage.getUserData())
    const {todoList} = Storage.getUserData()
    if (todoList.length === 0) {
        return '<p class="todos-notice">List is empty</p>'
    }

    return todoList.map(todo => {
        const style = todo.status === 'done'
            ? 'todos__item todos__item_done'
            : 'todos__item'
        return `
        <div class="${style}" data-todo-id="${todo.id}" data-todo-status="${todo.status}">
            <div class="todos__item-status"></div>
            <p class="todos__item-title">${todo.title}</p>
            <div class="todos__item-edit"></div>
            <div class="todos__item-remove"></div>
        </div>
        `
    }).join('')
}