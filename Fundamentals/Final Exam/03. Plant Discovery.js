function plantExhibition(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input[i].split("<->");
        rarity = Number(rarity);
        plants[plant] = { rarity, ratings: [] };
    }

    for (let i = n; i < input.length; i++) {
        if (input[i] === "Exhibition") {
            break;
        }

        let [command, plantInfo] = input[i].split(": ");
        let [plant, value] = plantInfo.split(" - ");

        if (plants.hasOwnProperty(plant)) {
            switch (command) {
                case "Rate":
                    plants[plant].ratings.push(Number(value));
                    break;
                case "Update":
                    plants[plant].rarity = Number(value);
                    break;
                case "Reset":
                    plants[plant].ratings = [];
                    break;
                default:
                    console.log("error");
                    break;
            }
        } else {
            console.log("error");
        }
    }

    console.log("Plants for the exhibition:");
    Object.keys(plants).forEach((plant) => {
        let averageRating =
            plants[plant].ratings.length > 0
                ? (
                      plants[plant].ratings.reduce((a, b) => a + b, 0) /
                      plants[plant].ratings.length
                  ).toFixed(2)
                : "0.00";

        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating}`);
    });
}