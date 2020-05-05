
var firstNumber = prompt("Користувач напишіть перше число");
var secondNumber = prompt("Користувач напишіть друге число");
var action = prompt("Яку дію ви хочете виконати?");
firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

if (action == "+") {
    var result = firstNumber + secondNumber;
    console.log(result);
} else if (action == "-") {
    var result = firstNumber - secondNumber;
    console.log(result);
} else if (action == "*") {
    var result = firstNumber * secondNumber;
    console.log(result);
} else if (action == "/") {
    var result = firstNumber / secondNumber;
    console.log(result);
}



