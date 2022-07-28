export class Component {
    constructor(id) {
        this.component = document.getElementById(id)
        this.init()
    }

    init() {
    }

    onHide() {
    }

    hide() {
        this.component.classList.add('hide')
        this.onHide()
    }

    show() {
        this.component.classList.remove('hide')
    }
}

