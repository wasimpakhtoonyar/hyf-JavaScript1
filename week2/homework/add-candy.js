console.log('add candy');

const boughtCandyPrices = [];
const ammountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
    if (candyType === 'sweet') {
        const price = 0.5 * weight;
        boughtCandyPrices.push(price);
    }
    
    if (candyType === 'chocolate') {
        const price = 0.7 * weight;
        boughtCandyPrices.push(price);
    }
    
    if (candyType === 'toffee') {
        const price = 1.1 * weight;
        boughtCandyPrices.push(price);
    }

    if (candyType === 'chewing-gum') {
        const price = 0.03 * weight;
        boughtCandyPrices.push(price);
    }
}

function canBuyMoreCandy() {
    let total = 0;
    let canIBuyMore = false;

    for (let i=0; i < boughtCandyPrices.length; i++) {
        total += boughtCandyPrices[i];
    }

    console.log('budget: ' + ammountToSpend);
    console.log('total: ' + total);

    if (total < ammountToSpend) {
        canIBuyMore = true;    
    }

    return canIBuyMore;
}

addCandy('sweet', 10);
addCandy('chocolate', 10);
addCandy('toffee', 10);
addCandy('chewing-gum', 10);

if (canBuyMoreCandy()) {
 console.log('You can buy more, so please do!');
} else {
    console.log('Enough candy for you!');
}