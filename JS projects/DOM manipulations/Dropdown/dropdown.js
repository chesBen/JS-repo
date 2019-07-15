function addItem() {
    let firstItemText = document.getElementById("newItemText");
    let secondItemValue = document.getElementById("newItemValue");
    let itemText = document.getElementById("newItemText").value;
    let itemValue = document.getElementById("newItemValue").value;
   
    let x = document.createElement("option");
    x.textContent = itemText;
    x.value = itemValue;
    document.getElementById("menu").appendChild(x);

    firstItemText.value = '';
    secondItemValue.value = '';
    
}