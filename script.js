
function add(num1,num2) {
    return num1+num2;
}

function subtract(num1,num2) {
    return num1-num2;
}

function multiply(num1,num2) {
    return num1*num2;
}

function divide(num1,num2) {
    return num1/num2;
}



function operate(op1,op2,sign) {
    switch(sign) {
        case "+":
            return add(op1,op2);
            break;
        case "-":
            return subtract(op1,op2);
            break;
        case "*":
            return multiply(op1,op2);
            break;
        case "/":
            return divide(op1,op2);
            break;
        default:
            throw new Error("Incorrect operation");
    }
}

