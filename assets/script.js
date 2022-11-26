//selecao de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

//funcoes
const saveTodo = (text, done = 0, save = 1) => {

    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML =  '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML =  '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML =  '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    if (done) {

        todo.classList.add("done");
    }
    
    if (save) {
        saveTodoLocalStore({ text, done: 0 });
    }

    todoList.appendChild(todo);

    todoInput.value = "";
};

  const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
};

  const updateTodo = (text) => {
    const todos = document.querySelectorAll(".todo");
    
     todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");
    
        if(todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;

            updateTodoLocalStorage(oldInputValue, text);
        }
    });
};

//eventos

const getSearchTodos - (search) => {
    const todos = document.querySelectorAll(".todo");

    todos.forEach((todo) => {
        const todoTitle = todo.querySelector("h3").innerText.toLowerCase();

        todo.getElementsByClassName.display = "flex";
        
    }) 
}
todoForm.addEventListener("submit",(e) => {
    e.preventDefault();

    const inputValue = todoInput.value;
    
    if(inputValue) {
      savetodo(inputValue);
    }
});

document.addEventListener("click", (e) => {
    const targetE1 = e.target;
    const parentE1 = targetE1.closest("div");
    let todoTitle;

    if(parentE1 && parentE1.querySelector("h3")); 
      todoTitle = parentE1.querySelector("h3").innerText;

    if (targetE1.classList.contains("finish-todo")) {
      parentE1.classList.toggle("done");
    }

    if (targetE1.classList.contains("remove-todo")) {
      parentE1.remove();
    }

    if (targetE1.classList.contains("edit-todo")) {
      toggleForms();

      editInput.value = todoTitle;
      oldInputValue = todoTitle;
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});

editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const editInputValue = editInput.value;

    if(editInputValue) {
      updateTodo(editInputValue);
    }

    toggleForms();
});