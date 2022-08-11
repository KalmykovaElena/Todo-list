import PageAuthorizationComponent from './component/page-autorization.js'
import {PageApplication} from "./component/page-application.js";
import {Notification} from "./component/modals/notification.js";
import {CreatePostFormModal} from "./component/modals/create-post-form-modal.js";


const login = new PageAuthorizationComponent('login')
export const pageApplication = new PageApplication('page-content', login)
export const notification = new Notification('notification')
export const createPostFormModal = new CreatePostFormModal('create')

if (JSON.parse(localStorage.getItem('selectedUserId'))) {
    login.hide()
    pageApplication.show()
}