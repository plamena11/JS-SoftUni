function ToyShop (input) {
    let excursion = Number(input[0]);
    let puzzle = Number(input[1]);
    let doll = Number(input[2]);
    let bear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);
    
    let puzzlePrice = puzzle * 2.60;
    let dollPrice = doll * 3;
    let bearPrice = bear * 4.10;
    let minionPrice = minion * 8.20;
    let truckPrice = truck * 2;
    let allToysAmount = puzzle + doll + bear + minion + truck;
    let allToysPrice = puzzlePrice + dollPrice + bearPrice + minionPrice + truckPrice;
    
    if (allToysAmount >= 50) {
        allToysPrice *= 0.75;
    }

    allToysPrice *= 0.9;

    if (allToysPrice >= excursion) {
        console.log(`Yes! ${(allToysPrice - excursion).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(excursion - allToysPrice).toFixed(2)} lv needed.`);
    }
}