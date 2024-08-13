function depositCalculator (input) {
    let depositSum = Number(input[0]);
    let termMonths = Number(input[1]);
    let yearPrecent = Number(input[2]);

    let precent = yearPrecent / 100;
    let totalYearPrecent = (depositSum * precent) /12;
    let total = depositSum + (termMonths * totalYearPrecent);
    console.log(total)
}