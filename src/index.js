import "./styles.css";
import Completed from "./modules/complete.js";

const todoList = document.querySelector(".item");
let todo = JSON.parse(localStorage.getItem("todo")) || [];

const displayList = () => {
  todo.forEach((item, index) => {
    const Iscompleted = item.completed ? "checked" : "";
    const check = item.completed ? "check" : "";
    item.index = index; 
    todoList.innerHTML += `<li class="list-group-item task" id="${item.index}"><input type="checkbox" class="checkbox" ${Iscompleted}>
    <input type="text" class="task-desc ${check}" value=${item.description}>
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

const deleteTask =  () => {
  const deleteIcon = document.querySelector('.fa-ellipsis-v');
  deleteIcon.addEventListener('click', (e) => {
  const target = e.target;
  if (target) {
    todo = todo.filter((item) => item.index !== parseInt(target.parentNode.id));
    clearItem();
    displayList();
    Completed.updateLocalStorage(todo);
  }
  e.preventDefault();
  });
}

deleteTask();
