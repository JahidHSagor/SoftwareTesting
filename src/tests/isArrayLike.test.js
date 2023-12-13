const isArrayLike = require('../isArrayLike');

describe('isArrayLike function', () => {
  it('should return true for an array', () => {
    const arr = [1, 2, 3];
    expect(isArrayLike(arr)).toBe(true);
  });

  it('should return false for a function', () => {
    const func = () => {};
    expect(isArrayLike(func)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isArrayLike(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isArrayLike(undefined)).toBe(false);
  });

  // Add more test cases as needed
});