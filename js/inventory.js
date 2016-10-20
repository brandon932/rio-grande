console.log("sanity check");

var inventory = {
  1:0,
  2:0,
  3:0,
  4:0,
  5:0
};



function findInventory(length) {
  console.log( length +":" +inventory[length]);

}

function addInventory(quantity, length){
  inventory[length] += quantity;
  console.log( length +":" +inventory[length]);
}

function removeInventory(quantity, length){
  if (inventory[length] - quantity < 0) {

  }else{
    inventory[length] -= quantity;
  }
  console.log( length +":" +inventory[length]);
}

function cutInventory(stock, length){
  inventory[stock] -= 1;
  inventory[length] += 1;
  inventory[stock-length] =+ 1;
}

findInventory(1);
findInventory(1);
addInventory(4, 4);
removeInventory(5, 4);
