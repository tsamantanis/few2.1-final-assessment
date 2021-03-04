import { expect } from 'chai';
import 'mocha';
const Carz = require('../src/')
const data = require('../data/data.json')

describe('test console log', () => {
    it('should return first object in data', () => {
        Carz.print()
    });

    it('should return first object in data first and last name', () => {
        let output = Carz.printFirstLast(data[0])
        expect(output).to.be.a('string')
        expect(output).to.be.equal('Neel Mclarty')
    });

    it('should print the purchased date to a a date and format it as: Month date, Year', () => {
        let output = Carz.printPurchased(data[0])
        expect(output).to.be.a('string')
        expect(output).to.be.equal('April 3, 2018')
    });

    it('should print out last payment showing the date as "when"', () => {
        let output = Carz.printPayment(data[0])
        expect(output).to.be.a('string')
        expect(output).to.be.equal('7 months ago')
    });
});
