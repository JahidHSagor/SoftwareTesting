const map = require('../map');

describe('map function', () => {
  it('should apply the iteratee function to each element in the array', () => {
    const array = [1, 2, 3];
    const iteratee = (value) => value * 2;

    const result = map(array, iteratee);

    // Assert that the result contains the mapped values
    expect(result).toEqual([2, 4, 6]);
  });

  it('should handle an empty array', () => {
    const array = [];
    const iteratee = (value) => value * 2;

    const result = map(array, iteratee);

    // Assert that an empty array is returned
    expect(result).toEqual([]);
  });

  it('should handle a null or undefined array', () => {
    const array = null;
    const iteratee = (value) => value * 2;

    const result = map(array, iteratee);

    // Assert that an empty array is returned
    expect(result).toEqual([]);
  });

  // Add more test cases as needed
});