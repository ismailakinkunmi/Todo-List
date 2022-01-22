import './style.css';
import Todos from './todos.js';


const todos = new Todos();

const todoList = [
  { description: 'meeting', completed: true, index: 1 },
  { description: 'coding', completed: false, index: 2 },
  { description: 'watching movie', completed: false, index: 3 },
];


const list = document.querySelector('.list');
const renderTodos = () => {
  list.innerHTML = '';
  todos.list.forEach((t) => {
    list.innerHTML += `
      <li id="${t.index}" draggable="true">
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

  document.querySelectorAll('.input').forEach((inp) => {
    inp.addEventListener('change', () => {
      const task = todos.list[+inp.parentNode.parentNode.id - 1];
      task.description = inp.value;
      todos.update(task);
      renderTodos();
    });
  });

  document.querySelectorAll('.delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      todos.remove(+btn.parentNode.parentNode.id);
      renderTodos();
    });
  });

  document.querySelectorAll('.more-todo').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.classList.add('hide');
      const parent = btn.parentNode.parentNode;
      parent.querySelector('.delete').classList.remove('hide');
      parent.classList.add('active');
      const input = parent.querySelector('.input');
      input.readOnly = false;
      input.focus();
    });
  });
};
renderTodos();

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  todos.add({
    description: form.elements.inputfield.value,
  });
  renderTodos();
  form.reset();
});
