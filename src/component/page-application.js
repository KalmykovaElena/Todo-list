import {Component} from "../core/component.js"

export class PageApplication extends Component {
    constructor(id, pageAuthorization) {
        super(id);
        this.pageAuthorization = pageAuthorization
    }

    init() {
        this.logoutBtn = document.getElementById('logoutBtn')
        this.logoutBtn.addEventListener('click', onLogoutHandler.bind(this))
    }


}

function onLogoutHandler() {
    this.hide()
    localStorage.setItem('selectedUserId', null)
    this.pageAuthorization.show()

}