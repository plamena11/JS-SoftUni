function Cinema (input) {
    let tipProjection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0;

    if (tipProjection == "Premiere") {
        income = rows * columns * 12;
    } else if (tipProjection == "Normal") {
        income = rows * columns * 7.5;
    } else if (tipProjection == "Discount") {
        income = rows * columns * 5;
    }

    console.log(`${(income).toFixed(2)} leva`);
}