function AreaOfFigures (input) {
    let figure = input[0];
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);

    if (figure == "square") {
        let areasquare = num1 * num1;
        console.log(areasquare);
    } else if (figure == "rectangle") {
        let arearectangle = num1 * num2;
        console.log(arearectangle);
    } else if (figure == "circle") {
        let areacircle = 3.14159 * num1 * num1;
        console.log(areacircle);
    } else if (figure == "triangle") {
        let areatriangle = 0.5 * num1 * num2;
        console.log(areatriangle);
    }
}