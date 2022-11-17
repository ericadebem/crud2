//selecao de elementos
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel.edit.btn");

//funcoes
const savetodo = (text) => {

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

    todoList.appendChild(todo);

    todoInput.value = "";
    todoInput.focus();
};

  const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}; 

//eventos
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

    if (targetE1.classList.contains("finish-todo")) {
      parentE1.classList.toggle("done");
    }

    if (targetE1.classList.contains("remove-todo")) {
      parentE1.remove();
    }

    if (targetE1.classList.contains("edit-todo")) {
      toggleForms();
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();
});