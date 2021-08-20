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
        } else {
          element.nextElementSibling.classList.toggle('check');
          element.checked = false;
          task[index].completed = false;
        }
        Completed.updateLocalStorage(task)
      });
    });
  }
}