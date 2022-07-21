import {Component} from "../core/component.js";
import {SignInComponent} from "./sign-in.js";
import {SignUpComponent} from "./sign-up.js";

class PageAuthorizationComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.signIn = new SignInComponent('sing-in')
        this.signUp = new SignUpComponent('sing-up')
        this.links = this.component.querySelectorAll('.form__link')
        this.links.forEach(link => {
            link.addEventListener('click', onChangeForHandler.bind(this))
        })
    }
}

function onChangeForHandler(e) {
    e.preventDefault()
    if (e.target.classList.contains('link-in')) {
        this.signIn.hide()
        this.signUp.show()
    } else if (e.target.classList.contains('link-up')) {
        this.signIn.show()
        this.signUp.hide()
    }
}

export default PageAuthorizationComponent