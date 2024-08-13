function SuppliesForSchool (input) {
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let cleaner = Number(input[2]);
    let discountProcent = Number(input[3]);

    let pricePenPacks = penPacks * 5.80;
    let priceMarkerPacks = markerPacks * 7.20;
    let priceCleaner = cleaner * 1.20;
    let totalPrice = pricePenPacks + priceMarkerPacks + priceCleaner;
    let totalPriceDiscount = totalPrice - (totalPrice * (discountProcent / 100));
    console.log(totalPriceDiscount);
}