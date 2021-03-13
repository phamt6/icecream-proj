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

        const orderService = new OrderService(mockData);
        expect(orderService.makeOrder()).to.eql(expected);
        done();
    })

    it('should throw an Error on non numerical inputs', (done) => {
        const mockData1 = {
            count: '150', 
            barPrice: '2.3', 
            packPrice: '25', 
            boxPrice: 230, 
            packSize: 12, 
            boxSize: 120.000
        };

        const mockData2 = {
            count: 150, 
            barPrice: 2.3, 
            packPrice: 25, 
            boxPrice: 230, 
            packSize: 12, 
            boxSize: 'one hundred twenty'
        };

        const orderService1 = new OrderService(mockData1);
        const orderService2 = new OrderService(mockData2);
        expect(() => orderService.makeOrder()).to.throw();
        done();
    })

    it('should throw an Error on missing inputs', (done) => {
        const mockData = {
            count: 150,  
            boxSize: 120
        };

        const orderService = new OrderService(mockData);
        expect(() => orderService.makeOrder()).to.throw();
        done();
    })

    it('should throw an Error on negative inputs', (done) => {
        const mockData1 = {
            count: -150, 
            barPrice: 2.3, 
            packPrice: 25, 
            boxPrice: 230, 
            packSize: 12, 
            boxSize: 120.000
        }

        const mockData2 = {
            count: 150, 
            barPrice: 2.3, 
            packPrice: 25, 
            boxPrice: 230, 
            packSize: 12, 
            boxSize: -120.000
        }

        const orderService1 = new OrderService(mockData1);
        const orderService2 = new OrderService(mockData2);
        expect(() => orderService1.makeOrder()).to.throw();
        expect(() => orderService2.makeOrder()).to.throw();
        done();
    })

    it('should throw an Error on decimal point inputs', (done) => {
        const mockData1 = {
            count: -150, 
            barPrice: 2.3, 
            packPrice: 25, 
            boxPrice: 230, 
            packSize: 12.4525, 
            boxSize: 120.000
        }

        const mockData2 = {
            count: 150.321, 
            barPrice: 2.3, 
            packPrice: 25, 
            boxPrice: 230, 
            packSize: 12, 
            boxSize: -120.000
        }

        const orderService1 = new OrderService(mockData1);
        const orderService2 = new OrderService(mockData2);
        expect(() => orderService1.makeOrder()).to.throw();
        expect(() => orderService2.makeOrder()).to.throw();
        done();
    })
})