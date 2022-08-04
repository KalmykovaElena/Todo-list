import PageAuthorizationComponent from './component/page-autorization.js'
import {PageApplication} from "./component/page-application.js";
import {Notification} from "./component/modals/notification.js";

const login = new PageAuthorizationComponent('login')
export const pageApplication = new PageApplication('page-content', login)
export const notification = new Notification('notification')
if (JSON.parse(localStorage.getItem('selectedUserId'))) {
    login.hide()
    pageApplication.show()
}