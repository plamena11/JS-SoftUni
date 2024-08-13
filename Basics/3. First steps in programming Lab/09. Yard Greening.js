function YardGreening (input){
    let grass = Number(input[0]);

    let wholeYard = grass * 7.61;
    let wholeYardDiscount = wholeYard * 0.18;
    let total = wholeYard - wholeYardDiscount;
    console.log(`The final price is: ${total} lv.`);
    console.log(`The discount is: ${wholeYardDiscount} lv.`);
}