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

  if (Number.isNaN(number1)) {
    greeting1 = "It's wrong content";
  }
  else {
    greeting1 = "";
  }
  document.getElementById("note1").innerHTML = greeting1;

  if (Number.isNaN(number2)) {
    greeting2 = "It's wrong content";
  }
  else {
    greeting2 = "";
  }
  document.getElementById("note2").innerHTML = greeting2;
}