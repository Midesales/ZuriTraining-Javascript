var num1 = +prompt("Enter First Number");
var operator = prompt("Enter Operator (+, -, *, %");
var num2 = +prompt("Enter Second Number");1


function Calculator(num1, num2) {
    if (operator === "/"){ 
        return (num1 / num2)
    } else if (operator === "*") {
        return (num1 * num2)
    } else if (operator === "+") {
        return (num1 + num2)
    }else if (operator === "-") {
        return (num1 - num2)
    } else if (operator === "%") {
        return (num1 % num2)
    }
}

alert((Calculator(num1, num2))) 