function ComputerStore (input) {
    let totalPriceWithoutTaxes = 0;
    let totalPriceWithTaxes = 0;
    let taxes = 0;
    let command = input.shift();

    while (command != "regular" && command != "special") {
        let price = Number(command);

        if (price <= 0) {
            console.log("Invalid price!");
        } else {
            totalPriceWithoutTaxes += price; 
        }

        command = input.shift();
    }

    taxes = Number((totalPriceWithoutTaxes * 0.2).toFixed(2));
    totalPriceWithTaxes = (totalPriceWithoutTaxes + taxes).toFixed(2); 

    if (command == "special") {
        totalPriceWithTaxes = Number(totalPriceWithTaxes * 0.9);
    }

    totalPriceWithTaxes = Number(totalPriceWithTaxes);

    if (totalPriceWithTaxes == 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceWithoutTaxes.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`);
    }
}