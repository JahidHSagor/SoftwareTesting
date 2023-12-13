const castArray = require('../castArray');

describe('castArray function', () => {
  it('should return an array when given a non-array value', () => {
    const result = castArray(5);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([5]);
  });

  it('should return the same array when given an array value', () => {
    const input = [1, 2, 3];
    const result = castArray(input);
    expect(result).toBe(input);
  });

  it('should return an empty array when no arguments are provided', () => {
    const result = castArray();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual([]);
  });

  // Add more test cases as needed
});