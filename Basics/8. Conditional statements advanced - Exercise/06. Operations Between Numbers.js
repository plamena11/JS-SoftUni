function OperationsBetweenNumbers (input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let symbol = input[2];

    let result = 0;
    let remainder = 0;
    let evenOrOdd;

    if (symbol == "+") {
        result = num1 + num2;
        if (result % 2 == 0) {
            evenOrOdd = "even";
            console.log(`${num1} ${symbol} ${num2} = ${result} - ${evenOrOdd}`);
        } else {
            evenOrOdd = "odd";
            console.log(`${num1} ${symbol} ${num2} = ${result} - ${evenOrOdd}`);
        }
    } else if (symbol == "-") {
        result = num1 - num2;
        if (result % 2 == 0) {
            evenOrOdd = "even";
            console.log(`${num1} ${symbol} ${num2} = ${result} - ${evenOrOdd}`);
        } else {
            evenOrOdd = "odd";
            console.log(`${num1} ${symbol} ${num2} = ${result} - ${evenOrOdd}`);
        }
    } else if (symbol == "*") {
        result = num1 * num2;
        if (result % 2 == 0) {
            evenOrOdd = "even";
            console.log(`${num1} ${symbol} ${num2} = ${result} - ${evenOrOdd}`);
        } else {
            evenOrOdd = "odd";
            console.log(`${num1} ${symbol} ${num2} = ${result} - ${evenOrOdd}`);
        }
    } 
    
    if (num2 == 0) {
        console.log(`Cannot divide ${num1} by zero`);
    } else {
        if (symbol == "/") {
            result = num1 / num2;
            console.log(`${num1} / ${num2} = ${(result).toFixed(2)}`);
        } else if (symbol == "%") {
            remainder = num1 % num2;
            console.log(`${num1} % ${num2} = ${remainder}`);
        }
    }
}