const data = require('../data/data.json')
const { Car } = require('../types')

function print<Car>() {
    return data[0]
}

module.exports = { print }
