const prompt = require('prompt-sync')({ sigint: true });

function amountPaidByGSP(bidders, poistions) {

    // Step #1 check If no bids
    if (bidders.length === 0) return "No Winners";

    // Step #2 sort by bids value DESC then alphabetical order
    bidders.sort((a, b) => dynamicSort(a, b, ['-bid', 'user']));

    // Step #3 apply the Generalized second-price auction mechanism
    for (let i = 0; i < bidders.length; i++) {

        if (bidders[i + 1] && poistions) {
            bidders[i].bid = bidders[i + 1].bid;
            poistions--;
        } else {
            bidders[i].bid = 'Lost';
        }

    }

    // Step #4 return updated bidders
    return bidders;

}


// Get user input & Convert it to a number

const bidders = [];
let counter = 0;

let biddersNumber = Number(prompt(`Number of bidders: `));
let poistionsNumber = Number(prompt(`Enter Items (poistions) Number: `));

while (true) {
    console.log("= = = = = = = =");

    let bidder = {}
    bidder['user'] = prompt(`Enter user: `);
    bidder['bid'] = prompt(`Bid in USD: `);

    bidders.push(bidder);
    counter++;

    if (counter === biddersNumber) {
        let results = amountPaidByGSP(bidders, poistionsNumber);
        console.log("output", results);
        break
    }
}

// dynamic Sort array properties according   
function dynamicSort(a, b, order) {
    if (order.length)
        for (let i = 0; i < order.length; i++) {
            let key = order[i], dir = 1;
            if (key[0] === "-") {
                dir = -1;
                key = key.substr(1);
            }
            if (a[key] < b[key]) return -dir;
            else if (a[key] > b[key]) return dir;
        }
    return 0;
}
//var bidders = [{ user: "John Doe", bid: 100 }, { user: "John Smith", bid: 500 },
//{ user: "Sara Conor", bid: 280 }, { user: "Martin Fowler", bid: 320 }];

