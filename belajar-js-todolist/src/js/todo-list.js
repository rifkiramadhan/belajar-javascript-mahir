const todolist = [
  'Belajar JavaScript Dasar',
  'Belajar JavaScript Object Oriented Programming',
  'Belajar JavaScript Document Object Model',
];

const clearTodoList = () => {
  const todolistBody = document.getElementById('todolistBody');
  while (todolistBody.firstChild) {
    todolistBody.removeChild(todolistBody.firstChild);
  }
};

const removeTodoList = (index) => {
  todolist.splice(index, 1);
  displayTodoList();
};

const addTodoList = (index, todo) => {
  const tr = document.createElement('tr');
  const tdButton = document.createElement('td');
  tr.appendChild(tdButton);

  const buttonDone = document.createElement('input');
  buttonDone.type = 'button';
  buttonDone.value = 'Done';

  buttonDone.onclick = () => {
    removeTodoList(index);
  };
  tdButton.appendChild(buttonDone);

  const tdTodo = document.createElement('td');
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);

  const todolistBody = document.getElementById('todolistBody');
  todolistBody.appendChild(tr);
};

const displayTodoList = () => {
  clearTodoList();

  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];

    const searchText = document.getElementById('search').value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(i, todo);
    }
  }
};

document.forms['todoForm'].onsubmit = (event) => {
  event.preventDefault();

  const todo = document.forms['todoForm']['todo'].value;
  todolist.push(todo);

  document.forms['todoForm'].reset();

  console.info(todolist);
  displayTodoList();
};

const searchInput = document.getElementById('search');
searchInput.onkeyup = () => {
  displayTodoList();
};
searchInput.onkeydown = () => {
  displayTodoList();
};

displayTodoList();
