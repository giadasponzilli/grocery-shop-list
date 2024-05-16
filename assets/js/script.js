
let form = document.getElementById("form");

let addItemButton = document.getElementById("addItemButton");


function addItem() {

  form.addEventListener("submit", function(event){
    event.preventDefault();

    // Each time an item is added, a "li" is created with that input value and the text is capitalized
    let listItem = document.createElement("li")
    let itemValue = itemInput.value.trim()
    listItem.innerHTML = itemValue.charAt(0).toUpperCase() + itemValue.slice(1)

    // Add Checkbox
    let checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    
    // Add Remove Button
    let buttonRemove = document.createElement("button")
    buttonRemove.textContent = "Remove"

    // Append all created elements to html
    list.appendChild(listItem)
    listItem.appendChild(checkBox)
    listItem.appendChild(buttonRemove)

    itemInput.value = ""
  })
}

addItem()