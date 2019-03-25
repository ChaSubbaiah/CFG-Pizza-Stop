function displayTotalCost()
{
  var size =  document.getElementById('thePizzaSize').value;
  $("#theTotalCost").val($(this).find("option:selected").attr("size"))

}
