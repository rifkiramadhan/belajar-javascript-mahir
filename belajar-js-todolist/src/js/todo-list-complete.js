const todolist = [
  'Belajar JavaScript Dasar',
  'Bejalar JavaScript Object Oriented Programming',
  'Belajar JavaScript Document Object Model',
];

const clearTodolistTable = () => {
  const todolistTable = document.getElementById('todolist');
  while (todolistTable.firstChild) {
    todolistTable.removeChild(todolistTable.firstChild);
  }
};

const removeTodoList = (index) => {
  todolist.splice(index, 1);
  renderTodolist();
};

const addTodoToTable = (index, todo) => {
  const todolistTable = document.getElementById('todolist');
  const todoRow = document.createElement('tr');
  todolistTable.append(todoRow);

  const todoItem = document.createElement('td');
  todoItem.textContent = todo;

  const todoButtoonItem = document.createElement('td');
  const todoButtonDone = document.createElement('input');
  todoButtonDone.type = 'button';
  todoButtonDone.value = 'Done';

  todoButtonDone.onclick = () => {
    removeTodoList(index);
  };

  todoButtoonItem.append(todoButtonDone);

  todoRow.append(todoButtonDone, todoItem);
};

const renderTodolist = () => {
  clearTodolistTable();

  for (let i = 0; i < todolist.length; i++) {
    const searchField = document.getElementById('search');

    if (
      todolist[i].toLowerCase().includes(searchField.value.trim().toLowerCase())
    ) {
      addTodoToTable(i, todolist[i]);
    }
  }
};

document.forms['todoForm'].onsubmit = (event) => {
  event.preventDefault();

  const todo = document.forms['todoForm']['todo'].value;
  todolist.push(todo);
  document.forms['todoForm'].reset();

  renderTodolist();
};

const searchField = document.getElementById('search');
searchField.onkeydown = renderTodolist;
searchField.onkeyup = renderTodolist;

renderTodolist();
