function Password (input) {
    let index = 0;
    let username = input[index];
    index++;
    let password = input[index];
    index++;
    let currentPassword = input[index];
    index++;

    while (currentPassword !== password) {
        currentPassword = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);
}