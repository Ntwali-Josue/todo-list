const todoList = document.querySelector(".item");
const todo = [
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
  for (let i = 0; i < todo.length; i++) {
    todoList.innerHTML += `<li class="list-group-item"><input type="checkbox"><p>${todo[i].description}</p><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>`;
  }
  return todoList;
};

displayList();
