function Process() {
  var number1 = document.getElementById("num1").value;
  number1 = parseInt(number1);
  var number2 = document.getElementById("num2").value;
  number2 = parseInt(number2);
  var sum = number1 + number2;
  var minus = number1 - number2;

  var resultSumDiv = document.getElementById("resultSum");
  resultSumDiv.value = sum;
  var resultMinusDiv = document.getElementById("resultMinus");
  resultMinusDiv.value = minus;

  if ("num1", "num2" != Number) {
    greeting = "It's wrong";
  }
  else {
    greeting = "";
  }
  document.getElementById("note").innerHTML = greeting;
}