function LunchBreak (input) {
    let serialName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * 0.125;
    let restTime = breakTime * 0.25;
    let timeLeft = breakTime - lunchTime - restTime;

    if (timeLeft >= episodeTime) {
        console.log(`You have enough time to watch ${serialName} and left with ${Math.ceil(timeLeft - episodeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(episodeTime - timeLeft)} more minutes.`);
    }
}