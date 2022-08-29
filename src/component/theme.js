import {Component} from "../core/component.js";
import {Storage} from "../core/storage.js";
export class TeamComponent extends Component{
    constructor(id,pageContainer) {
        super(id);
        this.pageContainer=pageContainer
    }
    init(){
        if (Storage.getTodoInfo()) {
            this.component.value = Storage.getTodoInfo().theme
        } else {
            this.component.value = 'blue'
        }
        this.component.addEventListener('change',onThemeHandler.bind(this))
    }
    value() {
        return this.component.value
    }
}
function onThemeHandler(e){
    Storage.setTheme(e.target.value)

    let classList = this.pageContainer.classList
    Array.from(classList).forEach(theme => {
        if (theme !== 'page-application') {
            this.pageContainer.classList.remove(theme)
        }

    })
    this.pageContainer.classList.add(e.target.value)
}