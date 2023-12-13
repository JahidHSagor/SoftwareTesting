const eq = require('../eq');

describe('eq function', () => {
  it('should return true when values are equal', () => {
    // Test cases with equal values
    expect(eq(5, 5)).toBe(true);
    expect(eq('hello', 'hello')).toBe(true);
    expect(eq(true, true)).toBe(true);
    expect(eq(null, null)).toBe(true);
    expect(eq(undefined, undefined)).toBe(true);
  });

  it('should return false when values are not equal', () => {
    // Test cases with non-equal values
    expect(eq(5, 10)).toBe(false);
    expect(eq('hello', 'world')).toBe(false);
    expect(eq(true, false)).toBe(false);
    expect(eq(null, undefined)).toBe(false);
    expect(eq({}, {})).toBe(false);
  });

  it('should handle special cases', () => {
    // Test cases with special values
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq(0, -0)).toBe(true);
    expect(eq(-0, 0)).toBe(true);
  });

  // Add more test cases as needed
});