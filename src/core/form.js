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
}