function calculateStayPrice(input) {
    let month = input[0];
    let nights = Number(input[1]);
  
    let studioPrice = 0;
    let apartmentPrice = 0;
  
    switch (month) {
      case "May":
      case "October":
        studioPrice = 50 * nights;
        apartmentPrice = 65 * nights;
        if (nights > 14) {
          studioPrice *= 0.7;
        } else if (nights > 7) {
          studioPrice *= 0.95;
        }
        break;
      case "June":
      case "September":
        studioPrice = 75.2 * nights;
        apartmentPrice = 68.7 * nights;
        if (nights > 14) {
          studioPrice *= 0.8;
        }
        break;
      case "July":
      case "August":
        studioPrice = 76 * nights;
        apartmentPrice = 77 * nights;
        break;
      default:
        console.log("Invalid month.");
        return;
    }
  
    if (nights > 14) {
      apartmentPrice *= 0.9;
    }
  
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
  }