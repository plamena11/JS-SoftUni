function SumNumbers (input) {
    let index = 0;
    let firstNum = Number(input[index]);
    index++;
    let sum = 0;

    while (sum < firstNum) {
        let currentNum = Number(input[index]);
        index++;
        sum += currentNum;
    }

    console.log(sum);
}