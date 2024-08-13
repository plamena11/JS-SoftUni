function PetShop (input){
    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);

    let total = (dogFoodPacks * 2.5) + (catFoodPacks * 4);
    console.log(`${total} lv.`)
}