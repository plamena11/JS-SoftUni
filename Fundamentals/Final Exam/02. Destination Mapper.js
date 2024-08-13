function findValidLocationsAndCalculatePoints(input) {
    const validLocations = [];
    let travelPoints = 0;

    const regex = /([=\/])([A-Z][a-zA-Z]{2,})\1/g;

    let match;
    while ((match = regex.exec(input)) !== null) {
        validLocations.push(match[2]);
        travelPoints += match[2].length;
    }

    console.log(`Destinations: ${validLocations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}