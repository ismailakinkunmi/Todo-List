export default class Todos {
  constructor() {
    this.list = localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks'))
      : [];
  }

  add(task) {
    task.index = this.list.length + 1;
    task.completed = false;
    this.list.push(task);

    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  remove(index) {
    this.list = this.list.filter((task) => task.index !== index);
    this.list = this.list.map((t) => {
      if (t.index > index) {
        t.index -= 1;
      }
      return t;
    });

    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  update(task) {
    this.list[task.index - 1] = task;
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  clearCompleted() {
    this.list = this.list
      .filter((task) => !task.completed)
      .map((task, i) => ({ ...task, index: i + 1 }));

    localStorage.setItem('tasks', JSON.stringify(this.list));
  }
}
