import {Component} from "../core/component.js";
import {pageApplication} from "../main.js";

export class Search extends Component{
    constructor(id) {
        super(id);
    }
    init(){
        this.filters={}
    Object.values(this.component).forEach(fieldForm=>{
        this.filters[fieldForm.name]=fieldForm.value
    })
        this.component.addEventListener('input',onSearchTextHandler.bind(this))
    }
    value(){
        return this.filters
    }
    clear(){
        this.component.title.value=''
        this.component.title.status='all'
        this.filters.title=''
        this.filters.title.status='all'
    }

}
function onSearchTextHandler(e){
    e.preventDefault()
    Object.keys(this.filters).forEach(field=>{
        this.filters[field]=this.component[field].value
    })
    console.log(this.filters)
    pageApplication.show()
}