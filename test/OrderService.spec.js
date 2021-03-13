const { expect } = require('chai');

const OrderService = require('../src/services/OrderService');

describe('OrderService', () => {
    it('should return correct result on correct inputs', (done) => {
        const mockData = {
            count: 150, 
            barPrice: 2.3, 
            packPrice: 25, 
            boxPrice: 230, 
            packSize: 12, 
            boxSize: 120.000
        }

        const expected = {
            boxCount: 1,
            packCount: 2,
            barCount: 6,
            totalPrice: 293.8
        };

        orderService = new OrderService(mockData);
        expect(orderService.makeOrder()).to.eql(expected);
        done();
    })
})