/*  TO-DO APP */
var  items = ["Programming Project", "Maths  Quiz", "Language Assignment"];
function showList() {
    
    let date = new Date();
    let day = date.getDay();
    let today = "";
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
  
    today = date.toLocaleDateString("en-US", options);
    document.getElementById("headerTitle").innerHTML = today;
  
    let toDoList = document.getElementById("studentList");
  
    items.forEach((x) => {
      let doc = `<div class = "item"><input type = "checkbox"><p>${x}</p></div`;
      toDoList.insertAdjacentHTML("beforeend", doc);
    });
  }
  showList();

  document.writeln("<script type='text/javascript' src='to_do_tutor.js'></script>");