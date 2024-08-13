function FoodDelivery (input){
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegetarianMenuPrice = vegetarianMenu * 8.15;
    let totalPriceMenu = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let desert = totalPriceMenu * 0.2;
    let totalPrice = totalPriceMenu + desert + 2.50;
    console.log(totalPrice);
}