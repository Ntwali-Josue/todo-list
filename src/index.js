import "./styles.css";
import Completed from "./modules/complete.js";

const todoList = document.querySelector(".item");
const todo = JSON.parse(localStorage.getItem("todo")) || [];

const displayList = () => {
  todo.forEach((item) => {
    const Iscompleted = item.completed ? "checked" : "";
    const check = item.completed ? "check" : "";
    todoList.innerHTML += `<li class="list-group-item"><input type="checkbox" class="checkbox" ${Iscompleted}>
    <p class="task-desc ${check}">${item.description}</p><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>`;
    return todoList;
  });
  Completed.completeTask(todo);
};

displayList();

const addTask = () => {
  const input = document.get('.task-desc') || '';
  input.addEventListener('keydown', (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      const task = input.value;
      if(task) {
        const addedTask = {
          description : task,
          completed : false,
          index : todo.length
        }
        todo.push(addedTask);
        displayList();
        Completed.updateLocalStorage(todo);
      }
      input.value = '';
    }
  })
}

addTask()