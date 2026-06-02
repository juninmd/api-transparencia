const request = require('supertest');
const app = require('../src/app');

describe('App', () => {
  it('should return 404 for a non-existent route', async () => {
    const response = await request(app).get('/invalid-route');
    expect(response.status).toBe(404);
  });
});