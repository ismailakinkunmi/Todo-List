import './style.css';

const todoList = [
  { description: 'meeting', completed: true, index: 1 },
  { description: 'coding', completed: false, index: 2 },
  { description: 'watching movie', completed: true, index: 3 },
];

const list = document.querySelector('.list');
const renderTodos = () => {
  list.innerHTML = '';
  todoList.forEach((todo) => {
    list.innerHTML += `
      <li id="task-${todo.index}" draggable="true">
        <div class="content">
          <input class="check" type="checkbox" ${
            todo.completed ? 'checked' : ''
          }/>
          <input class="input" type="text" value='${
            todo.description
          }' readonly />
        </div>
        <div class="actions">
         <i class="fas fa-trash-alt delete hide"></i>
         <i class="fas fa-ellipsis-v more-todo"></i>
                
        </div>
      </li>
      `;
  });
};
renderTodos();
