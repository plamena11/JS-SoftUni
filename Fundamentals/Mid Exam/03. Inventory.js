function solve(input) {
    let journal = input.shift().split(', ');

    for (let line of input) {
        if (line === 'Craft!') {
            break;
        }

        let [command, arg] = line.split(' - ');

        switch (command) {
            case 'Collect':
                if (!journal.includes(arg)) {
                    journal.push(arg);
                }
                break;
            case 'Drop':
                if (journal.includes(arg)) {
                    let index = journal.indexOf(arg);
                    journal.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = arg.split(':');
                if (journal.includes(oldItem)) {
                    let index = journal.indexOf(oldItem);
                    journal.splice(index + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (journal.includes(arg)) {
                    let index = journal.indexOf(arg);
                    let renewed = journal.splice(index, 1);
                    journal.push(renewed[0]);
                }
                break;
        }
    }

    return journal.join(', ');
}