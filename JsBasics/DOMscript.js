
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementById("delete");
//delete
button.removeEventListener("click", function(){
    var li = document.delete(deleteButton.value);
    ul.delete(li);
})




function inputLength(){
    return input.value.length;
}

function createListElements(){
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        //li.appendChild(document.createTextNode("testing"));
        ul.appendChild(li);
        input.value = ""; 
}
function addListAfterClick(){
    if(inputLength() > 0){
        createListElements();
    }
}
function addListAfterKeypress(event){
    if(inputLength() > 0 && event.code === "Enter"){
        createListElements();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);


// button.addEventListener("click", function(){
//     if(inputLength() > 0){
//         createListElements();
//     }
// })
// input.addEventListener("keypress", function(event){
//     if(inputLength() > 0 && event.code === "Enter"){
//         createListElements();
//     }
// })
