import {Component} from "../../core/component.js";
import {Storage} from "../../core/storage.js";
import {Validator} from '../../core/validators.js'
import {pageApplication} from "../../main.js";
import {Form} from "../../core/form.js";

export class FormEditPostModal extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.component.addEventListener('click', oncloseModalHandler.bind(this))
        this.formWrapper = this.component.firstElementChild
        this.formWrapper.addEventListener('submit',onsubmitPostHandler.bind(this))
        this.formData = new Form(this.formWrapper,{
            title:[Validator.required],
            description:[Validator.required]
        })
    }


    onShow(todoId) {
        this.id = todoId
        this.todoData = Storage.getTodoInfo(todoId)
        this.formWrapper.title.value = this.todoData.title
        this.formWrapper.description.value = this.todoData.description
    }


}


function oncloseModalHandler(e){
    const {target}= e
    const isBg = target==this.component
    if (isBg){
        this.hide()
    }
}
function onsubmitPostHandler(e){
    e.preventDefault()
    if (this.formData.isValid()){
        const formData={
            ...this.todoData,
            ...this.formData.value()
        }
        if (this.formWrapper.title.value!=this.todoData.title ||
            this.formWrapper.description.value != this.todoData.description)
        Storage.editPost(this.id,formData)
this.hide()
            pageApplication.show()
        }

}