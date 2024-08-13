function NewHouse (input) {
    let flower = input[0];
    let flowerAmount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    if (flower == "Roses") {
        price = flowerAmount * 5;
        if (flowerAmount > 80) {
            price *= 0.9;
        }
    } else if (flower == "Dahlias") {
        price = flowerAmount * 3.8;
        if (flowerAmount > 90) {
            price *= 0.85;
        }
    } else if (flower == "Tulips") {
        price = flowerAmount * 2.8;
        if (flowerAmount > 80) {
            price *= 0.85;
        }
    } else if (flower == "Narcissus") {
        price = flowerAmount * 3;
        if (flowerAmount < 120) {
            price *= 1.15;
        }
    } else if (flower == "Gladiolus") {
        price = flowerAmount * 2.5;
        if (flowerAmount < 80) {
            price *= 1.2;
        }
    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowerAmount} ${flower} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
}