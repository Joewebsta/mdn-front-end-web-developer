const orderedList = document.querySelector('ul');
const btn = document.querySelector('button');
const textInput = document.querySelector('#item');

function handleClickSubmit() {
  if (textInput.value === '') return
  
  addListItem(textInput.value);
  focusInput();
}

function handleEnterSubmit(e) {
  if (e.key === 'Enter') handleClickSubmit();
}

function addListItem(text) {
  console.log(text);

  // Create list item elements - li and button
  const listItem = document.createElement('li');
  const delBtn = document.createElement('button');

  // Provide li and button text
  listItem.textContent = text;
  delBtn.textContent = 'Delete'

  // Add delete button to list item
  listItem.appendChild(delBtn);

  // Add list item to UL
  orderedList.appendChild(listItem);

  delBtn.addEventListener('click', deleteListItem);
}

function deleteListItem(e) {
  e.target.parentNode.remove();
}

function focusInput() {
  textInput.value = '';
  textInput.focus();
}

btn.addEventListener('click', handleClickSubmit);
textInput.addEventListener('keypress', handleEnterSubmit);

