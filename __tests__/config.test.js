describe('Application Configuration', () => {
  let originalEnv;

  beforeEach(() => {
    originalEnv = { ...process.env };
    jest.resetModules();
  });

  afterEach(() => {
    Object.keys(process.env).forEach((key) => {
      if (!(key in originalEnv)) {
        delete process.env[key];
      } 
    });
    Object.assign(process.env, originalEnv);
  });

  describe('Port Configuration', () => {

    test('should use PORT environment variable when set', () => {
      process.env.PORT = '8080';
      const config = require('../src/config/app');
      expect(config.port).toBe('8080');
    });

    test('should default to 3000 when PORT is not set', () => {
      delete process.env.PORT;
      const config = require('../src/config/app');
      expect(config.port).toBe('3000');
    });

    test('should default to 3000 when PORT is empty string', () => {
      process.env.PORT = '';
      const config = require('../src/config/app');
      expect(config.port).toBe('3000');
    });
  });

  describe('Environment Configuration', () => {
    beforeEach(() => {
      jest.resetModules();
    });

    test('should use NODE_ENV environment variable when set', () => {
      process.env.NODE_ENV = 'production';
      const config = require('../src/config/app');
      expect(config.env).toBe('production');
    });

    test('should default to empty string when NODE_ENV is not set', () => {
      delete process.env.NODE_ENV;
      const config = require('../src/config/app');
      expect(config.env).toBe('');
    });
  });

  describe('Path Configuration', () => {
    beforeEach(() => {
      jest.resetModules();
    });

    test('should use REQUEST_PATH environment variable when set', () => {
      process.env.REQUEST_PATH = '/api/v1';
      const config = require('../src/config/app');
      expect(config.path).toBe('/api/v1');
    });

    test('should default to empty string when REQUEST_PATH is not set', () => {
      delete process.env.REQUEST_PATH;
      const config = require('../src/config/app');
      expect(config.path).toBe('');
    });
  });

  describe('Redis Configuration', () => {
    beforeEach(() => {
      jest.resetModules();
    });

    test('should use REDIS_URL environment variable when set', () => {
      process.env.REDIS_URL = 'redis://localhost:6379';
      const config = require('../src/config/app');
      expect(config.redisUrl).toBe('redis://localhost:6379');
    });

    test('should default to redis://redis:6379 when REDIS_URL is not set', () => {
      delete process.env.REDIS_URL;
      const config = require('../src/config/app');
      expect(config.redisUrl).toBe('redis://redis:6379');
    });
  });
});