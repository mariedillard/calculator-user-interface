
var add = function(number1, number2) {
  return number1 + number2;
};
var subtract = function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var divide = function(number1, number2) {
  return number1 / number2;
};
$(document).ready(function(){
  $("#addSubmit").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
  $("#subtractSubmit").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });
  $("#multSubmit").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });
  $("#divideSubmit").click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});


/*
//the easy way
var calc = eval(prompt("this is a calculator"));
  alert(parseInt(calc));
*/
