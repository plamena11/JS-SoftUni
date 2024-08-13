function manipulateStops(input) {
    let stops = input.shift();
  
    for (let command of input) {
      if (command === "Travel") {
        console.log(`Ready for world tour! Planned stops: ${stops}`);
        break;
      }
  
      let [action, ...params] = command.split(':');
  
      switch (action) {
        case "Add Stop":
          let [index, stringToAdd] = params;
          index = Number(index);
          if (index >= 0 && index <= stops.length) {
            stops = stops.slice(0, index) + stringToAdd + stops.slice(index);
          }
          break;
  
        case "Remove Stop":
          let [startIndex, endIndex] = params.map(Number);
          if (startIndex >= 0 && endIndex < stops.length && startIndex <= endIndex) {
            stops = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
          }
          break;
  
        case "Switch":
          let [oldString, newString] = params;
          stops = stops.split(oldString).join(newString);
          break;
      }
  
      console.log(stops);
    }
  }