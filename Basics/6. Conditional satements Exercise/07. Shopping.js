function Shopping (input) {
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videocardsPrice = videocards * 250;
    let processorsPrice = (videocardsPrice * 0.35) * processors;
    let ramPrice = (videocardsPrice * 0.1) * ram;
    let total = videocardsPrice + processorsPrice + ramPrice;

    if (videocards > processors) {
        total *= 0.85; 
    }

    if (budget >= total) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }
}