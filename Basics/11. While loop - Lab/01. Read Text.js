function ReadText (input) {
    let index = 0;
    let words = input[index];
    index++;

    while (words !== "Stop") {
        console.log(words);
        words = input[index];
        index++;
    }
}