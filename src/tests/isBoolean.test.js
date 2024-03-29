const isBoolean = require('../isBoolean');

describe('isBoolean function', () => {
  it('should return true for boolean primitives', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('should return true for boolean objects', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
    expect(isBoolean(new Boolean(false))).toBe(true);
  });

  it('should return false for non-boolean values', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean('')).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(function() {})).toBe(false);
  });
});