import {Component} from "../../core/component.js";
import {renderConfirm}from "../../template/render-confirm.js"
import {pageApplication} from "../../main.js";
import {Storage} from "../../core/storage.js";

export class ConfirmActionModal extends Component{
    constructor(id) {
        super(id);
    }

    init(){
        this.component.addEventListener('click',onCloseModalHandler.bind(this))
    }
onShow(todoId) {
        this.todoId=todoId
    this.component.innerHTML=''
    const htmlInfoConfirm=renderConfirm()
    this.component.insertAdjacentHTML('afterbegin',htmlInfoConfirm)

    }
}
function onCloseModalHandler(e){
    const {target}=e
    const isBg = target ===this.component
    const isCaselBtn = target === this.component.querySelector('modal__btn_disagree')
    if (isBg || isCaselBtn){
        this.hide()
    }
    if(target.classList.contains('modal__btn_agree')){
        Storage.removePost(this.todoId)
        this.hide()
        pageApplication.show()
    }

}