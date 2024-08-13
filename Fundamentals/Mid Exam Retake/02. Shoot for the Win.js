function trackShotTargets(input) {
    let targets = input.shift().split(' ').map(Number);
    let shotCount = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'End') {
            break;
        }

        let index = Number(input[i]);

        if (index < 0 || index >= targets.length || targets[index] === -1) {
            continue;
        }

        let targetValue = targets[index];
        targets[index] = -1; // mark as shot
        shotCount++;

        for (let j = 0; j < targets.length; j++) {
            if (targets[j] !== -1) {
                if (targets[j] > targetValue) {
                    targets[j] -= targetValue;
                } else {
                    targets[j] += targetValue;
                }
            }
        }
    }

    let result = "Shot targets: " + shotCount + " -> " + targets.join(' ');
    return result;
}