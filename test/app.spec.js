const request = require('supertest');
const { expect } = require('chai');

const createServer = require('../src/server');
const app = createServer();

describe('server checks', () => {
    it('is created without any error', (done) => {
        request(app).get('/api/v1').expect(200, done);
    })
})