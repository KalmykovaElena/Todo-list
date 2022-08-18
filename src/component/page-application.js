import {Component} from "../core/component.js"
import {confirmActionModal, createPostFormModal, pageApplication, todoInfoModal} from "../main.js";
import {renderTodos} from "../template/render-post.js";
import {Storage} from "../core/storage.js";

export class PageApplication extends Component {
    constructor(id, pageAuthorization) {
        super(id);
        this.pageAuthorization = pageAuthorization
    }

    init() {
        this.logoutBtn = document.getElementById('logoutBtn')
        this.logoutBtn.addEventListener('click', onLogoutHandler.bind(this))
        this.createBtn = document.getElementById('create-btn')
        this.createBtn.addEventListener('click', onShowFormCreatePostHandler)
        this.todoList = document.querySelector('.todos-container')
    }
    onShow() {
        this.todoList.innerHTML = ''
        const html = renderTodos()
        this.todoList.insertAdjacentHTML('afterbegin', html)
        this.items = this.todoList.querySelectorAll('.todos__item')
        Array.from(this.items).forEach(item => {
            item.addEventListener('click', onTodoHandler)
        })
    }

}

function onLogoutHandler() {
    this.hide()
    localStorage.setItem('selectedUserId', null)
    this.pageAuthorization.show()

}

function onShowFormCreatePostHandler() {
    createPostFormModal.show()
}
function onTodoHandler(e) {
    const todoId = this.dataset.todoId
    if(e.target.classList.contains('todos__item')){
        todoInfoModal.show(todoId)
    }
    if(e.target.classList.contains('todos__item-remove')){
   confirmActionModal.show(todoId)

    }
    if(e.target.classList.contains('todos__item-edit')){
        formEditPostModal.show(todoId)
    }


}