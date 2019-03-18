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
  console.log(selection_topping);
  console.log(selection_quantity);
  var totalValue= Number(selection_pizzaSize)+ Number(selection_crust)+ Number(selection_topping);
  var totes = totalValue * (Number(selection_quantity));
  console.log(totalValue);
  console.log(totes);
  document.getElementById("theTotalCost").value= Number(totes);
  $("#theToppingsType").change(function () {
    $("#toBilling").toggle(!isNaN(+$(this).val()));
});
}
