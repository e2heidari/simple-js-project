function Process() {
  var number1 = document.getElementById("num1").value;
  number1 = parseInt(number1);
  var number2 = document.getElementById("num2").value;
  number2 = parseInt(number2);
  var sum = number1 + number2;
  var minus = number1 - number2;

  var resultSumDiv = document.getElementById("resultSum");
  resultSumDiv.innerText = sum;
  var resultMinusDiv = document.getElementById("resultMinus");
  resultMinusDiv.innerText = minus;

}
