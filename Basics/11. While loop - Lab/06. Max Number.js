function MaxNumber (input) {
    let index = 0;
    let command = input[index];
    index++;

    let maxNum = Number.MIN_SAFE_INTEGER;
    
    while (command !== "Stop") {
        let currentNum = Number(command);

        if (maxNum < currentNum) {
            maxNum = currentNum;
        }

        command = input[index];
        index++;
    }

    console.log(maxNum);
}