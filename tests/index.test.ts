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
});
