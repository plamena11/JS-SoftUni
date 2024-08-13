function VacationBooksList (input) {
    let pageAmount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let bookTimeRead = pageAmount / pagesPerHour;
    let hoursPerDay = bookTimeRead / days;
    console.log(hoursPerDay);
}