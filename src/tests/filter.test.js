const filter = require('../filter');

describe('filter function', () => {
    it('should filter elements based on the provided predicate', () => {
      const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
      ];
  
      const result = filter(users, ({ active }) => active);
  
      // Assert that the result contains the filtered elements
      expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
    });
  
    it('should handle an empty array', () => {
      const result = filter([], () => true); // Change the predicate to always return true
  
      // Assert that an empty array is returned
      expect(result).toEqual([]);
    });
  
    it('should handle a predicate that filters nothing', () => {
      const users = [
        { 'user': 'barney', 'active': true },
        { 'user': 'fred', 'active': false }
      ];
  
      const result = filter(users, () => true);
  
      // Assert that the original array is returned
      expect(result).toEqual(users);
    });
  
    // Add more test cases as needed
  });