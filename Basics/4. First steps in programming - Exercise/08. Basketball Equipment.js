function BasketballEquipment (input) {
    let yearTax = Number(input[0]);

    let shoes = yearTax - (yearTax * 0.4);
    let clothes = shoes - (shoes * 0.2);
    let ball = clothes * 0.25;
    let accessories = ball * 0.2;
    let total = yearTax + shoes + clothes + ball + accessories;
    console.log(total);
}