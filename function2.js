function calculate(num1, num2, proc) {
    if (proc == "add") {
        return "add: " + num1 + num2;
    }
    else if (proc == "multiply") {
        return "Product: " + num1 * num2;
    }
    else if (proc == "divide") {
        if (num1 >= num2) {
            return "Division: " + num1 / num2;
        }
        else if (num2 > num1) {
            return "Division: " + num2 / num1;
        }


    }
    else if (proc == "subtract") {
        if (num1 > num2) {
            return "Difference: " + (num1 - num2);
        }
        else if (num1 < num2) {
            return "Difference: " + -(num1 - num2);
        }
        else {
            return "Difference of equal numbers is always " + 0;
        }
    }
}
console.log(calculate(5, 5, "add"));
console.log(calculate(5, 5, "multiply"));
console.log(calculate(58, 15, "subtract"));
console.log(calculate(0, 0, "divide"));
