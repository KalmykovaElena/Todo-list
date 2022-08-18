import PageAuthorizationComponent from './component/page-autorization.js'
import {PageApplication} from "./component/page-application.js";
import {Notification} from "./component/modals/notification.js";
import {CreatePostFormModal} from "./component/modals/create-post-form-modal.js";
import {TodoInfoModal} from "./component/modals/todo-info-modal.js";
import {ConfirmActionModal} from "./component/modals/confirm-action-modal.js";
import {FormEditPostModal} from "./component/modals/form-edit-post-modal.js";


const login = new PageAuthorizationComponent('login')
export const pageApplication = new PageApplication('page-content', login)
export const notification = new Notification('notification')
export const createPostFormModal = new CreatePostFormModal('create')
export const todoInfoModal = new TodoInfoModal('info')
export const confirmActionModal = new ConfirmActionModal('confirm')
export const formEditPostModal= new FormEditPostModal('edit')

if (JSON.parse(localStorage.getItem('selectedUserId'))) {
    login.hide()
    pageApplication.show()
}