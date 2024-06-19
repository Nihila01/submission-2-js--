let inventory = new Map();

function addItem(itemName, quantity) {
  inventory.set(itemName, quantity);
}

function updateItemQuantity(itemName, quantity) {
  if (inventory.has(itemName)) {
    inventory.set(itemName, inventory.get(itemName) + quantity);
  } else {
    console.log("Item not found");
  }
}

function checkItemQuantity(itemName) {
  return inventory.get(itemName) || 0;
}

addItem("apple", 100);
addItem("banana", 150);
updateItemQuantity("apple", 50);

console.log(checkItemQuantity("apple")); 
console.log(checkItemQuantity("banana")); 
