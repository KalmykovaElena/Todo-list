import {Component} from "../core/component.js";
import {Form} from "../core/form.js"


export class SignUpComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.component.addEventListener('submit', onSubmitHandler.bind(this))
        this.formData = new Form(this.component, {
            name: [required],
            email: [required, isEmailValid],
            password: [required]
        })
        // console.log(this.component)
        // console.log(this.formData)
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

function required(value = '') {
    return value && value.trim()
}

function isEmailValid(value = '') {
    const array = value.trim().split('')
    for (let i = 0; i < array.length; i++) {
        if (array[i] === ' ') return false
    }
    if (!value.includes('@')) return false
    return value.trim
}