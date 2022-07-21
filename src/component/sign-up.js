import {Component} from "../core/component.js";
import {Form} from "../core/form.js"

function onSubmitHandler(e) {
    e.preventDefault()
    const formData = {
        ...this.formData.value()
    }
    console.log(formData)
}

export class SignUpComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.component.addEventListener('submit', onSubmitHandler.bind(this))
        this.formData = new Form(this.component, {
            name: '',
            email: '',
            password: ''
        })
    }
}