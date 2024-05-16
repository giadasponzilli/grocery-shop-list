
let textItem = document.getElementById("itemInput");

let addItemButton = document.getElementById("addItemButton");


function addItem() {

  addItemButton.addEventListener("click", function(){

    let listItem = document.createElement("li")
    listItem.innerHTML = itemInput.value.trim()

    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    
    let buttonRemove = document.createElement("button")
    buttonRemove.textContent = "Remove"
    
    list.appendChild(listItem)
    listItem.appendChild(checkBox)
    listItem.appendChild(buttonRemove)

    itemInput.value = ""
  })
}

addItem()