function TradeCommissions (input) {
    let city = input[0];
    let sell = Number(input[1]);

    let commission = 0;

    switch (city) {
        case "Sofia":
            if (sell >= 0 && sell <= 500) {
                commission = sell * 0.05;
                console.log((commission).toFixed(2));
            } else if (sell > 500 && sell <= 1000) {
                commission = sell * 0.07;
                console.log((commission).toFixed(2));
            } else if (sell > 1000 && sell <= 10000) {
                commission = sell * 0.08;
                console.log((commission).toFixed(2));
            } else if (sell > 10000) {
                commission = sell * 0.12;
                console.log((commission).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Plovdiv":
            if (sell >= 0 && sell <= 500) {
                commission = sell * 0.055;
                console.log((commission).toFixed(2));
            } else if (sell > 500 && sell <= 1000) {
                commission = sell * 0.08;
                console.log((commission).toFixed(2));
            } else if (sell > 1000 && sell <= 10000) {
                commission = sell * 0.12;
                console.log((commission).toFixed(2));
            } else if (sell > 10000) {
                commission = sell * 0.145;
                console.log((commission).toFixed(2));
            } else {
                console.log("error");
            }
            break;
        case "Varna":
            if (sell >= 0 && sell <= 500) {
                commission = sell * 0.045;
                console.log((commission).toFixed(2));
            } else if (sell > 500 && sell <= 1000) {
                commission = sell * 0.075;
                console.log((commission).toFixed(2));
            } else if (sell > 1000 && sell <= 10000) {
                commission = sell * 0.10;
                console.log((commission).toFixed(2));
            } else if (sell > 10000) {
                commission = sell * 0.13;
                console.log((commission).toFixed(2));
            } else {
                console.log("error");
            }
            break;
            default:
                console.log("error");
                break;
    }
}