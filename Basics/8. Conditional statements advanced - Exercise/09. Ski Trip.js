function SkiTrip (input) {
    let stayDays = Number(input[0]);
    let room = input[1];
    let rate = input[2];

    stayDays--;
    let roomForOnePersonPrice = 0;
    let apartmentPrice = 0;
    let presidentApartmentPrice = 0;
    let apartmentPriceDiscount = 0;
    let presidentApartmentPriceDiscount = 0;
    let roomForOnePersonPriceRate = 0;
    let apartmentPriceRate = 0;
    let presidentApartmentPriceRate = 0;

    switch (room) {
        case "room for one person":
            roomForOnePersonPrice = stayDays * 18;
            if (rate == "positive") {
                roomForOnePersonPriceRate = roomForOnePersonPrice + (roomForOnePersonPrice * 0.25);
            } else if (rate == "negative") {
                roomForOnePersonPriceRate = roomForOnePersonPrice - (roomForOnePersonPrice * 0.1);
            }
            break;

        case "apartment":
            apartmentPrice = stayDays * 25;
            if (stayDays < 10) {
                apartmentPriceDiscount = apartmentPrice * 0.7;
            } else if (stayDays >= 10 && stayDays <= 15) {
                apartmentPriceDiscount = apartmentPrice * 0.65;
            } else if (stayDays >15) {
                apartmentPriceDiscount = apartmentPrice * 0.5;
            }

            if (rate == "positive") {
                apartmentPriceRate = apartmentPriceDiscount + (apartmentPriceDiscount * 0.25);
            } else if (rate == "negative") {
                apartmentPriceRate = apartmentPriceDiscount - (apartmentPriceDiscount * 0.1);
            }
            break;

        case "president apartment":
            presidentApartmentPrice = stayDays * 35;
            if (stayDays < 10) {
                presidentApartmentPriceDiscount = presidentApartmentPrice * 0.9;
            } else if (stayDays >= 10 && stayDays <= 15) {
                presidentApartmentPriceDiscount = presidentApartmentPrice * 0.85;
            } else if (stayDays >15) {
                presidentApartmentPriceDiscount = presidentApartmentPrice * 0.8;
            }

            if (rate == "positive") {
                presidentApartmentPriceRate = presidentApartmentPriceDiscount + (presidentApartmentPriceDiscount * 0.25);
            } else if (rate == "negative") {
                presidentApartmentPriceRate = presidentApartmentPriceDiscount - (presidentApartmentPriceDiscount * 0.1);
            }
            break;
    }

    if (room == "room for one person") {
        console.log((roomForOnePersonPriceRate).toFixed(2));
    } else if (room == "apartment") {
        console.log((apartmentPriceRate).toFixed(2));
    } else if (room == "president apartment") {
        console.log((presidentApartmentPriceRate).toFixed(2));
    }
}