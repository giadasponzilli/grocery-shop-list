
let form = document.getElementById("form");

// let addItemButton = document.getElementById("addItemButton");

let basketList = document.getElementById("basketList")


function addItem() {

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Each time an item is added, a "li" is created with that input value and the text is capitalized
    let listItem = document.createElement("li")
    let itemValue = itemInput.value.trim()
    itemValue = itemValue.charAt(0).toUpperCase() + itemValue.slice(1).toLowerCase()
    listItem.innerHTML = itemValue

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

    // Clear input field after submission of form
    itemInput.value = ""

    // Logic for Checkboxes
    checkBox.addEventListener("change", function () {
      if (this.checked) {
        let basketListItem = document.createElement("li")
        basketListItem.innerHTML = itemValue
        basketListItem.dataset.value = itemValue
        basketList.appendChild(basketListItem)
      } else {
        let basketItems = basketList.querySelectorAll("li")
        basketItems.forEach(function (basketItem) {
          if (basketItem.dataset.value === itemValue) {
            basketItem.remove()
          }
        })

        //remove from basketList any basketListItem which value is equal to the value of unchecked box
      }
    })
  })
}



addItem()