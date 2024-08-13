function SumOfTwoNumbers (input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);

    let found = false;
    let counter = 0;

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            counter++;
            if (a + b === magicNum) {
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNum})`);
                found = true;
                break;
            }
        }

        if (found) {
            break;
        }
    }

    if (!found){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}