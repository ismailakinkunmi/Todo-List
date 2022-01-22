import './style.css';

const todoList = [
  { description: 'meeting', completed: true, index: 1 },
  { description: 'coding', completed: false, index: 2 },
  { description: 'watching movie', completed: false, index: 3 },
];

const list = document.querySelector('.list');
const renderTodos = () => {
  list.innerHTML = '';
  todoList.forEach((t) => {
    list.innerHTML += `
      <li id="task-${t.index}" draggable="true">
        <div class="content">
          <input class="check" type="checkbox" ${t.completed ? 'checked' : ''}/>
          <input class="input" type="text" value='${t.description}' readonly />
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
