export default class Completed {
  static updateLocalStorage(task){
    const data = JSON.stringify(task);
    localStorage.setItem('todo', data);
  }
  static completeTask(task) {
    this.change = document.querySelectorAll('.checkbox');
    this.change.forEach((element, index) => {
      element.addEventListener('change', () => {
        if (element.checked) {
          element.nextElementSibling.classList.toggle('check');
          element.checked = true;
          task[index].completed = true;
          element.nextElementSibling.nextElementSibling.classList.add('fa-trash-o');
          element.nextElementSibling.nextElementSibling.classList.remove('fa-ellipsis-v');
        } else {
          element.nextElementSibling.classList.toggle('check');
          element.checked = false;
          task[index].completed = false;
          element.nextElementSibling.nextElementSibling.classList.remove('fa-trash-o');
          element.nextElementSibling.nextElementSibling.classList.add('fa-ellipsis-v');
        }
        Completed.updateLocalStorage(task)
      });
    });
  }
}