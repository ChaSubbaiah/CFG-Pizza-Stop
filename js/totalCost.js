function setTotal(){
  var pizzasize= document.getElementById("thePizzaSize");
  var crust = document.getElementById("theCrustType");
  var topping = document.getElementById("theToppingsType");
  var numberOfPizza = document.getElementById("quantity");
  var selection_pizzaSize = pizzasize.options[pizzasize.selectedIndex].value;
  var selection_crust = crust.options[crust.selectedIndex].value;
  var selection_topping = topping.options[topping.selectedIndex].value;
  var selection_quantity = numberOfPizza.options[numberOfPizza.selectedIndex].value;
  console.log(selection_pizzaSize);
  console.log(selection_crust);
  console.log(selection_quantity);
  var totalValue= (selection_pizzaSize+selection_crust+selection_topping)*selection_quantity;
  //string("totValue")= toString(totalvalue);
  document.getElementById("theTotalCost").value=totalValue;
}
