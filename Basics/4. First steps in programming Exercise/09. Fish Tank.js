function FishTank (input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let capacity = length * width * height;
    let capacityLiter = capacity * 0.001;
    let literNeed = capacityLiter * (1 - 0.17);
    console.log(literNeed)
}