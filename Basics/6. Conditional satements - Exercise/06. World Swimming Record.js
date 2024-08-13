function WorldSwimmingRecord (input) {
    let record = Number(input[0]);
    let distanceMeter = Number(input[1]);
    let timeSeconds = Number(input[2]);

    let totalSecondsNeeded = distanceMeter * timeSeconds;
    let delay = Math.floor(distanceMeter / 15) * 12.5;
    let totalTime = totalSecondsNeeded + delay;

    if (totalTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`);
    }
}