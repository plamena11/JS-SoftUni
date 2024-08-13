function  PrintandSum (start, end) {
    let numsStr = '';
    let sum = 0;

    for (let num = start; num <= end; num++) {
        numsStr += num + ' ';
        sum += num;
    }

    console.log(numsStr);
    console.log(`Sum: ${sum}`);
}