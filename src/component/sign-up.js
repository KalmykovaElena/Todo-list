import {Component} from "../core/component.js";
import {Form} from "../core/form.js"
import {Validator} from "../core/validators.js";
import {Storage} from "../core/storage.js"
import {pageApplication} from "../main.js";

export class SignUpComponent extends Component {
    constructor(id, page) {
        super(id);
        this.page = page
    }

    init() {

        this.component.addEventListener('submit', onSubmitHandler.bind(this))
        this.formData = new Form(this.component, {

            // name: [Validator.required, Validator.isNameValid],
            // email: [Validator.required, Validator.isEmailValid],
            // password: [Validator.required, Validator.isPasswordValid],
            name: [Validator.required],
            email: [Validator.required],
            password: [Validator.required],
        })

    }

    onHide() {
        this.formData.clear()
    }
}

function onSubmitHandler(e) {
    e.preventDefault()
    if (this.formData.isValid()) {
        const formData = {
            ...this.formData.value(),
            id: new Date().getTime(),
            todoList: [],
            theme: 'gray'
        }
        this.formData.clear()
        const userId = Storage.createNewUser(formData)
        if (!userId) return
        localStorage.setItem('selectedUserId', userId)
        this.page.hide()
        pageApplication.show()
    }
}




