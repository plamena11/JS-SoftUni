function Journey (input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let place;
    let moneySpend;

    if (budget <= 100) {
        destination = "Bulgaria"
        if (season == "summer") {
            moneySpend = budget - (budget * 0.7);
            place = "Camp";
        } else {
            moneySpend = budget - (budget * 0.3);
            place = "Hotel";
        }
    } else if (budget <= 1000) {
        destination = "Balkans"
        if (season == "summer") {
            moneySpend = budget - (budget * 0.6);
            place = "Camp";
        } else {
            moneySpend = budget - (budget * 0.2);
            place = "Hotel";
        }
    } else {
        destination = "Europe"
        moneySpend = budget - (budget * 0.1);
        place = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${(moneySpend).toFixed(2)}`);
}