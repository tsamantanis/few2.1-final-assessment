import { expect } from 'chai';
import 'mocha';
const Carz = require('../src/')
const BetterDate = require("@tsamantanis/date-lib")
const BetterString = require("@tsamantanis/string-lib")

describe('test console log', () => {
    it('should return first object in data', () => {
        console.log(Carz.print())
    });
});
