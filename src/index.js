const todoList = document.querySelector('.item');
const todo = [
  {
  "description" : 'Todo list one',
  "completed" : false,
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
  let populateList;
  for(let i = 0; i<todo.length; i++) {
    const list = document.createElement('li');
    list.innerHTML += `${todo[i].description}`;
    populateList = todoList.appendChild(list);
  }
  return populateList;
}

displayList();
