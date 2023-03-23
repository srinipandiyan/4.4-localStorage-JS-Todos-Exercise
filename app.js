let form = document.querySelector('#todoform');
let todoInput = document.querySelector('#task');
let myTodos = document.querySelector('#myTodos');

//function to save myTodos to localStorage
function saveMyTodos() {
  localStorage.setItem('myTodosList', JSON.stringify(myTodos.innerHTML));
}

//function to retrieve myTodos from localStorage
function retrieveMyTodos() {
  let savedTodos = localStorage.getItem('myTodosList');
  if (savedTodos) {
    myTodos.innerHTML = JSON.parse(savedTodos);
  }
}

// call myTodos from localStorage using retrieveMyTodos();
retrieveMyTodos();

//add items to todo list
form.addEventListener('submit', function(e){
    e.preventDefault();
  
    let myListItem = document.createElement('div');

    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    let discardTodo = document.createElement('button');
    discardTodo.innerText = "x";
    
    myListItem.append(newTodo, discardTodo);
    myTodos.append(myListItem);
    saveMyTodos();

    form.reset();
});

//listen for clicks to cross-off or delete items on todo list
myTodos.addEventListener("click", function(e) {
    let element = e.target.tagName;
    if (element === "BUTTON") {
      e.target.parentNode.remove();
    } else if (element === "LI") {
      e.target.style.textDecoration = "line-through";
    }
    saveMyTodos();
  });