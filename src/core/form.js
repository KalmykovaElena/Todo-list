export class Form {
    constructor(form, controls) {
        this.form = form
        this.controls = controls
    }

    value() {
        const value = {};
        Object.keys((this.controls)).forEach(field => {
            value[field] = this.form[field].value
        })
        return value
    }

    isValid() {
        let isValidateForm = true
        Object.keys(this.controls).forEach((field) => {
            const validators = this.controls[field]
            let isValid = true
            validators.forEach(validator => {
                isValid = validator(this.form[field].value)
            })
            isValidateForm = isValid
        })
        return isValidateForm
    }
}