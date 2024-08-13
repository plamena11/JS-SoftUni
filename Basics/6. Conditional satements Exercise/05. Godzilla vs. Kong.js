function GodzillaVsKong (input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothingForOnePersonPrice = Number(input[2]);

    let decor = budget * 0.1;
    let clothingForAll = people * clothingForOnePersonPrice;

    if (people > 150) {
        clothingForAll *= 0.9;
    }

    let moneyNeeded = decor + clothingForAll;

    if (moneyNeeded > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(moneyNeeded - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - moneyNeeded).toFixed(2)} leva left.`);
    }
}