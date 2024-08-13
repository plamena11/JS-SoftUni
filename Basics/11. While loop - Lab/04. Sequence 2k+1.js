function Sequence2kPlus1 (input) {
    let num = Number(input[0]);

    let x = 1;

    while (x <= num) {
        console.log(x);
        x = x * 2 + 1;
    }
}