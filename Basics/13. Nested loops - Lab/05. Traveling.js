function travelDestinations(input) {
    let index = 0;
    let destination = input[index];
  
    while (destination !== "End") {
      let budget = Number(input[index + 1]);
      let savedMoney = 0;
  
      for (let i = index + 2; i < input.length; i++) {
        let currentMoney = Number(input[i]);
        savedMoney += currentMoney;
  
        if (savedMoney >= budget) {
          console.log(`Going to ${destination}!`);
          index = i + 1;
          break;
        }
      }
  
      destination = input[index];
    }
  }