const data = require('../data/data.json')
const { Car } = require('../types')
const BetterDate = require("@tsamantanis/date-lib")
const BetterString = require("@tsamantanis/string-lib")

function print<Car>() {
    console.log(data[0])
    return data[0]
}

function printFirstLast(data: typeof Car): string {
    let output:string = BetterString.capitalize(data.first_name) + ' ' + BetterString.capitalize(data.last_name);
    console.log(output)
    return output;
}

function printPurchased(data: typeof Car): string {
    let output:string = new BetterDate(data.purchased).format('M d, Y');
    console.log(output)
    return output;
}

function printPayment(data: typeof Car): string {
    let output:string = new BetterDate(data.lastpayment).when();
    console.log(output)
    return output;
}

module.exports = {
    print,
    printFirstLast,
    printPurchased,
    printPayment,
}
