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