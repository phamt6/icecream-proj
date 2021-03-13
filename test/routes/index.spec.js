const request = require('supertest');
const { expect } = require('chai');

const createServer = require('../../src/server');
const app = createServer();

describe('price routes', () => {
    it('/price responds with 200', (done) => {
        request(app).post('/api/v1/price').expect(200, done);
    })
})