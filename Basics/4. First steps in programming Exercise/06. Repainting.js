function Repainting (input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + (paint / 10)) * 14.50;
    let thinnerPrice = thinner * 5;
    let totalMaterials = nylonPrice + paintPrice + thinnerPrice + 0.4;
    let craftsman = (totalMaterials * 0.3) * hours;
    let totalPrice = totalMaterials + craftsman;
    console.log(totalPrice);
}