const toNumber = require('../toNumber');

describe('toNumber function', () => {
  it('should convert a number to the same number', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  it('should convert a string representation of a number to a number', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('0')).toBe(0);
    expect(toNumber('-123')).toBe(-123);
  });

  it('should convert a string representation of a binary number to a number', () => {
    expect(toNumber('0b1010')).toBe(10);
    expect(toNumber('0b1111')).toBe(15);
  });

  it('should convert a string representation of an octal number to a number', () => {
    expect(toNumber('0o10')).toBe(8);
    expect(toNumber('0o77')).toBe(63);
  });

  it('should return NaN for invalid string representations', () => {
    expect(toNumber('abc')).toBe(NaN);
    expect(toNumber('0x123')).toBe(NaN);
  });

  // Add more test cases as needed
});