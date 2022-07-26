console.log("app . js");

class App {
    constructor() {
        this.items = [
            {
                id: 1,
                title: "item 1",
                isCompleted: true
            },
            {
                id: 1,
                title: "item 2",
                isCompleted: false
            }
        ];

        this.state = {};

        this.todoContentElement = document.querySelector('#todo-content');
        this.todoInputElements = document.querySelectorAll('input');
        this.todoCreateElement = document.querySelector('#create');
        this.subscribeEvents();

    }

    subscribeEvents() {
        this.todoInputElements.forEach(element => element.addEventListener('keyup', this.handleOnchangeInput))
        this.todoCreateElement.addEventListener('click', this.addItem)
    }

    handleOnchangeInput = () => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        this.state[inputName] = inputValue;
        console.log(this.state);
    }

    createTodoItem(item) {

        /* make element 
           <li class="completed">
             <div>
                 <span>item 1</span>
                 <button>x</button>
             </div>
           </li>
        */
        const todoLiElement = document.createElement('li');
        if (item.isCompleted) todoLiElement.classList.add('completed');



        const todoDivElement = document.createElement('div');
        const todoSpanElement = document.createElement('span');
        todoSpanElement.innerHTML = item.title;
        const todoButtonElement = document.createElement('button');
        todoButtonElement.textContent = "x";
        todoDivElement.appendChild(todoSpanElement);
        todoDivElement.appendChild(todoButtonElement);
        todoLiElement.appendChild(todoDivElement);
        return todoLiElement;
    }

    addItem = () => {
        this.items.push(
            {
                id: Math.random(),
                title: this.state['input-create'],
                isCompleted: false
            }
        );

        this.renderItems();

    }

    removeItem() {

    }

    renderItems() {
        this.todoContentElement.innerHTML = "";
        this.items.forEach(item => this.todoContentElement.appendChild(this.createTodoItem(item)));
        console.log('renderItems')
    }
}

const app = new App();

app.renderItems();
// app.addItem();
// app.createTodoItem('label');

