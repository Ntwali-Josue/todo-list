const todoList = document.querySelector('.item');
const todoDescription = document.querySelector('.todo-description');
const addList = document.querySelector('.add');

const todo = [
  {
  "description" : 'Todo list one',
  "completed" : true,
  "index" : 1
  },
  {
    "description" : 'Todo list two',
    "completed" : false,
    "index" : 2
  },
  {
    "description" : 'Todo list three',
    "completed" : false,
    "index" : 3
  }
];

const displayList = () => {
  const list = todo.map((item) => `<div>${item.description}</div>`)
  console.log(list);
}

addList.addEventListener('click', displayList);
