function FruitShop (input) {
    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);

    let price = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit) {
                case "banana": price = amount * 2.5; console.log((price).toFixed(2)); break;
                case "apple": price = amount * 1.2; console.log((price).toFixed(2)); break;
                case "orange": price = amount * 0.85; console.log((price).toFixed(2)); break;
                case "grapefruit": price = amount * 1.45; console.log((price).toFixed(2)); break;
                case "kiwi": price = amount * 2.7; console.log((price).toFixed(2)); break;
                case "pineapple": price = amount * 5.5; console.log((price).toFixed(2)); break;
                case "grapes": price = amount * 3.85; console.log((price).toFixed(2)); break;
                default: console.log("error"); break;
            }
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": price = amount * 2.7; console.log((price).toFixed(2)); break;
                case "apple": price = amount * 1.25; console.log((price).toFixed(2)); break;
                case "orange": price = amount * 0.9; console.log((price).toFixed(2)); break;
                case "grapefruit": price = amount * 1.60; console.log((price).toFixed(2)); break;
                case "kiwi": price = amount * 3; console.log((price).toFixed(2)); break;
                case "pineapple": price = amount * 5.6; console.log((price).toFixed(2)); break;
                case "grapes": price = amount * 4.2; console.log((price).toFixed(2)); break;
                default: console.log("error"); break;
            }
            break;
        default: console.log("error"); break;
    }
}