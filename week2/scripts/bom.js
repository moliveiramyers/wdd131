const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

list.textContent = input.value;
deleteButton.textContent = '❌';

li.append(deleteButton);
list.append(li);

