function movingTargets(input) {
    let targets = input.shift().split(' ').map(Number);

    for (let line of input) {
        if (line === 'End') {
            break;
        }

        let [command, index, value] = line.split(' ');
        index = Number(index);
        value = Number(value);

        if (command === 'Shoot') {
            if (index >= 0 && index < targets.length) {
                targets[index] -= value;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (command === 'Add') {
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }
        } else if (command === 'Strike') {
            if (index >= 0 && index < targets.length) {
                let start = index - value;
                let end = index + value;
                if (start < 0 || end >= targets.length) {
                    console.log('Strike missed!');
                } else {
                    targets.splice(start, end - start + 1);
                }
            } else {
                console.log('Strike missed!');
            }
        }
    }

    console.log(targets.join('|'));
}