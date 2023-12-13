const isObject = require('../isObject');

describe('isObject function', () => {
  it('should return true for objects', () => {
    const obj = { name: 'John', age: 30 };
    const result = isObject(obj);
    expect(result).toBe(true);
  });

  it('should return true for functions', () => {
    const func = () => {};
    const result = isObject(func);
    expect(result).toBe(true);
  });

  it('should return false for null', () => {
    const result = isObject(null);
    expect(result).toBe(false);
  });

  it('should return false for undefined', () => {
    const result = isObject(undefined);
    expect(result).toBe(false);
  });

  it('should return false for numbers', () => {
    const result = isObject(123);
    expect(result).toBe(false);
  });

  it('should return false for strings', () => {
    const result = isObject('hello');
    expect(result).toBe(false);
  });

  // Add more test cases as needed
});