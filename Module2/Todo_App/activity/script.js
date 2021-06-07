let addtodobtn = document.querySelector(".add-todo");
let inputext = document.querySelector(".todo-input");
let listcontainer=document.querySelector(".todos-list-container");
addtodobtn.addEventListener("click", function (e) {
  if (inputext.value) {
    addtodo(inputext.value);
    inputext.value="";
  }
});
inputext.addEventListener("keypress",function(e){
    if(inputext.value && e.code=="Enter"){
        addtodo(inputext.value);
        inputext.value="";  
    }
})
function addtodo(text){
    let div = document.createElement("div");
    div.classList.add("todo-container");
    let para=document.createElement('p');
    para.classList.add("todo-para");
    para.textContent=text;
    let deletebtn=document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.textContent="Delete Me";
    deletebtn.addEventListener("click",deletelist);
    div.appendChild(para);
    div.appendChild(deletebtn);
    listcontainer.appendChild(div);
}
function deletelist(e){
    console.log(e.target.parentNode.remove());
}
//selfimplemented