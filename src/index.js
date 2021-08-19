import "./styles.css";
import Completed from "./complete.js";

const todoList = document.querySelector(".item");
const todo = JSON.parse(localStorage.getItem("todo")) || [
  {
    description: "Todo list one",
    completed: false,
    index: 1,
  },
  {
    description: "Todo list two",
    completed: false,
    index: 2,
  },
  {
    description: "Todo list three",
    completed: false,
    index: 3,
  },
];

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
