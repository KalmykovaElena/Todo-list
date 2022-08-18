import {Component} from "../../core/component.js";
import {renderTodoInfo} from "../../template/render-todo-info.js";

export class TodoInfoModal extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.component.addEventListener('click', onCloseModalHandler.bind(this))
    }

    onShow(todoId) {
        this.component.innerHTML = ''
        this.htmlInfo = renderTodoInfo(todoId)
        this.component.insertAdjacentHTML('afterbegin', this.htmlInfo)
    }
}

function onCloseModalHandler(e) {
    const {target} = e
    const isBg = this.component === target
    const isOkBtn = target === this.component.querySelector('.modal__btn')
    if (isBg || isOkBtn) this.hide()
}