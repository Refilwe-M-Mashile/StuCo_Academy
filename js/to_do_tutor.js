//tutor's to-do App
let myForm = document.getElementById("form");

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let input = document.getElementById("inputText");

    /*items.push(input.value);*/
    createItem(input.value);
    input.value = "";
});

function createItem(task) {
  let toDoList = document.getElementById("list");
  let doc = `<li class = "item">${task}<button id = "btn-del" onclick = "deleteItem(this)">Del</button></li>`;
  toDoList.insertAdjacentHTML("beforeend", doc);
  
}

function deleteItem(task){
    /*items.indexOf(task)*/
    task.parentElement.remove();
}
