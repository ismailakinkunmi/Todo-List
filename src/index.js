const todoListContianer = document.querySelector('.list');

const todoList = [
  {
    description: 'coding',
    completed: true,
    index: 1,
  },
  {
    description: 'reading',
    completed: false,
    index: 2,
  },
  {
    description: 'watching movie',
    completed: false,
    index: 3,
  },
];

todoList.forEach((list) => {
  todoListContianer.innerHTML += `<li>
  <div>
  <input type="checkbox">
  <p>${list.description}</p>
  </div>
  </li>
  `;
});
