function calculate(num1, num2, calcType) {
    var result;
    switch (calcType)
    {
        case 0:
            result = add(num1, num2);
            break;
        case 1:
            result = substract(num1, num2);
            break;
        case 2:
            result = multiply(num1, num2);
            break;
        case 3:
            result = divide(num1, num2);
            break;
        default:
            break;
    }
    return result;
}

function add(num1, num2) {
    var result = num1 + num2;
    return result;
}

function substract(num1, num2) {
    var result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    var result = num1 / num2;
    return result;
}