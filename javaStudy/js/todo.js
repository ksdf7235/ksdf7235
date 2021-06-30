const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY ="toDose"
let toDoes = [];

function saveToDoes(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoes));
}

//JSON.stringify= 무엇이든 스트링 배열로 바꿔줌

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDoes = toDoes.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDoes();
}


function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = newTodo.Text;
    button.innerText = "x";
    button.addEventListener("click",deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    
}

function HTodoSubmit(){
    event.preventDefault();
    const newTodo = toDoInput.value;
   toDoInput.value="";
   const newTodoObj = {
       Text:newTodo,
       id:Date.now(),
   };
   toDoes.push(newTodoObj);
   paintTodo(newTodoObj);
   saveToDoes();

}

toDoForm.addEventListener("submit",HTodoSubmit)

const saveTodoes  = localStorage.getItem(TODOS_KEY)


if(saveTodoes !== null ){
    const parsedToDos = JSON.parse(saveTodoes);
    toDoes = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

// (item) => console.log("this is the turn of", item)



