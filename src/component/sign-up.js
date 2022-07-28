import {Component} from "../core/component.js";
import {Form} from "../core/form.js"
import {Validator} from "../core/validators.js";


export class SignUpComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {

        this.component.addEventListener('submit', onSubmitHandler.bind(this))
        this.formData = new Form(this.component, {

            name: [Validator.required, Validator.isNameValid],
            email: [Validator.required, Validator.isEmailValid],
            password: [Validator.required, Validator.isPasswordValid],
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
            ...this.formData.value()
        }
        console.log(formData)
    }
}




