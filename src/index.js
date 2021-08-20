import "./styles.css";
import Completed from "./modules/complete.js";

const todoList = document.querySelector(".item");
const todo = JSON.parse(localStorage.getItem("todo")) || [];

const displayList = () => {
  todo.forEach((item, index) => {
    const Iscompleted = item.completed ? "checked" : "";
    const check = item.completed ? "check" : "";
    item.index = index; 
    todoList.innerHTML += `<li class="list-group-item" id="${item.index}"><input type="checkbox" class="checkbox" ${Iscompleted}>
    <p class="task-desc ${check}">${item.description}</p>
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    </li>`;
    return todoList;
  });
  Completed.completeTask(todo);
};

displayList();

const clearItem  = () => {
  const todoList = document.querySelector(".item");
  todoList.innerHTML = '';
}

const addTask = () => {
  const input = document.querySelector('.todo-input');
  input.addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
      const task = input.value;
      if(task) {
        const addedTask = {
          description : task,
          completed : false,
          index : todo.length
        }
        todo.push(addedTask);
        clearItem();
        displayList();
        Completed.updateLocalStorage(todo);
      }
      input.value = '';
      e.preventDefault();
    }
  })
}

addTask()