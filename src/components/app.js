import {LitElement, html} from '@polymer/lit-element';

class TodoApp extends LitElement {
    static get properties() {
        return {
            todoList: Array
        }
    }
    constructor() {
        super();
        this.todoList = [];
    }

    _render({todoList}) {
    
        return html `<p> Hello todo app </p>`;
    }

    
}

customElements.define('todo-app', TodoApp);