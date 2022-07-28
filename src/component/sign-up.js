import {Component} from "../core/component.js";
import {Form} from "../core/form.js"


export class SignUpComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.component.addEventListener('submit', onSubmitHandler.bind(this))
        this.formData = new Form(this.component, {
            name: [required,isNameValid],
            email: [required,isEmailValid],
            password: [required,isPasswordValid],
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
    if (!value.includes('@')) {
        console.log(111)
        return false
    }
    return value.trim()
}

function isNameValid(value=''){
    let letters = /^[A-Za-z0-9_]+$/;
    if(value.match(letters)) return true;
    else {
        alert("Error: Username must contain only letters, numbers and underscores!")
        return false;
    }
}
function isPasswordValid(value=''){

    if(value.length < 6) {
            alert("Error: Password must contain at least six characters!");
            return false;
        }
      let  re = /[0-9]/;
        if(!re.test(value)) {
            alert("Error: password must contain at least one number (0-9)!");
            return false;
        }
        re = /[a-z]/;
        if(!re.test(value)) {
            alert("Error: password must contain at least one lowercase letter (a-z)!");
            return false;
        }
        re = /[A-Z]/;
        if(!re.test(value)) {
            alert("Error: password must contain at least one uppercase letter (A-Z)!");
            return false;
        }
    alert("You entered a valid password: " );
    return true;
    }

