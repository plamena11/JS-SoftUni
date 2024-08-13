function trackBattles(input) {
    let initialEnergy = Number(input.shift());
    let count = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "End of battle") {
            console.log(`Won battles: ${count}. Energy left: ${initialEnergy}`);
            break;
        }

        let distance = Number(input[i]);

        if (initialEnergy < distance) {
            console.log(`Not enough energy! Game ends with ${count} won battles and ${initialEnergy} energy`);
            break;
        } else {
            initialEnergy -= distance;
            count++;

            if (count % 3 === 0) {
                initialEnergy += count;
            }
        }
    }
}