var addButton = document.getElementById("addButton");
var toDoList = document.getElementById("toDoList");
var todoInput = document.getElementById("todoInput");
var due = document.getElementById("dueby");
var clear = document.getElementById("deleteAll");

function markAsDone(event){
    event.target.parentElement.parentElement.style.backgroundColor = "red";
}

function markAsinprog(event){
    event.target.parentElement.parentElement.style.backgroundColor = "yellow";
}

function removeTodo(event){
    event.target.parentElement.parentElement.remove();
}

function edit_text(event){
    event.target.parentElement.parentElement.childNodes[0].setAttribute("contenteditable","true");
    event.target.parentElement.parentElement.childNodes[1].setAttribute("contenteditable","true");
}

function save_text(event){
    event.target.parentElement.parentElement.childNodes[0].setAttribute("contenteditable","false");
    event.target.parentElement.parentElement.childNodes[1].setAttribute("contenteditable","false");
}

function addToDoList(){
    var toDoMain = document.createElement('tr');
    toDoMain.className = "row";
    toDoMain.id = String(Math.random());

    var todo = document.createElement('td');
    todo.appendChild(document.createTextNode(todoInput.value));
    toDoMain.appendChild(todo);

    var dueBy = document.createElement('td');
    dueBy.appendChild(document.createTextNode(due.value));
    toDoMain.appendChild(dueBy);

    var todoX = document.createElement('td');
    var X_button = document.createElement('button');
    X_button.appendChild(document.createTextNode('X'));
    todoX.appendChild(X_button);
    todoX.className = "option";
    toDoMain.appendChild(todoX);
    X_button.addEventListener("click", removeTodo);
 
    var prog = document.createElement('td');
    var prog_button = document.createElement('button');
    prog_button.appendChild(document.createTextNode('In Progress'));
    prog.appendChild(prog_button);
    prog.className = "option";
    toDoMain.appendChild(prog);
    prog_button.addEventListener("click",markAsinprog);

    var todoEdit = document.createElement('td');
    var Edit_button = document.createElement('button');
    Edit_button.appendChild(document.createTextNode('Edit'));
    todoEdit.appendChild(Edit_button);
    todoEdit.className = "option";
    toDoMain.appendChild(todoEdit);
    todoEdit.addEventListener("click", edit_text);

    var save = document.createElement('td');
    var save_button = document.createElement('button');
    save_button.appendChild(document.createTextNode('Save'));
    save.appendChild(save_button);
    save.className = "option";
    toDoMain.appendChild(save);
    save.addEventListener("click", save_text);

    var todoDone = document.createElement('td');
    var Done_button = document.createElement('button');
    Done_button.appendChild(document.createTextNode('Done'));
    todoDone.appendChild(Done_button);
    todoDone.className = "option";
    toDoMain.appendChild(todoDone);
    Done_button.addEventListener("click", markAsDone);

    toDoList.appendChild(toDoMain);
}

function clearList(){
    toDoList.remove();
    toDoList = document.createElement('table');
    toDoList.id = "toDoList";
    var row = document.createElement("tr");
    var th1 = document.createElement("th");
    th1.appendChild(document.createTextNode('To-do'));
    row.appendChild(th1);
    var th2 = document.createElement("th");
    th2.appendChild(document.createTextNode('Due Date'));
    row.appendChild(th2);
    var th3 = document.createElement("th");
    th3.colSpan = "5";
    th3.appendChild(document.createTextNode('Options'));
    row.appendChild(th3);
    toDoList.appendChild(row);
    document.body.appendChild(toDoList);
}


addButton.addEventListener("click", addToDoList );
clear.addEventListener("click", clearList);