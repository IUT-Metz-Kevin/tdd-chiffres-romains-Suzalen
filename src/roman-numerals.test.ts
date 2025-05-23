// Write your test here
import { RomanNumeral } from './roman-numeral.ts';
import { describe, beforeEach, it, expect } from 'vitest';

describe('RomanNumeral', () => {
  let romanNumeral: RomanNumeral;

  beforeEach(() => {
    romanNumeral = new RomanNumeral();
  });

  it('should return 1 for "I"', () => {
    expect(romanNumeral.of('I')).toBe(1);
  });

  it('should return 5 for "V"', () => {
    expect(romanNumeral.of('V')).toBe(5);
  });
  
  it('should return 2 for "II"', () => { 
    expect(romanNumeral.of('II')).toBe(2); });

  it('sould return 4 for "IV"', () => {
    expect(romanNumeral.of('IV')).toBe(4);
  });

  it('should return 3 for "III"', () => {
    expect(romanNumeral.of('III')).toBe(3);
  });

  it('should return 9 for "IX"', () => {
    expect(romanNumeral.of('IX')).toBe(9);
  });

  it('should return 10 for "X"', () => {
    expect(romanNumeral.of('X')).toBe(10);
  });

  it('should return 10 for VV', () => {
    expect(romanNumeral.of('VV')).toBe(10);
  });

  it('should return 50 for "L"', () => {
    expect(romanNumeral.of('L')).toBe(50);
  });

  it('should return 100 for "C"', () => {
    expect(romanNumeral.of('C')).toBe(100);
  });

  it('should return 500 for "D"', () => {
    expect(romanNumeral.of('D')).toBe(500);
  });

  it('should return 1000 for "M"', () => {
    expect(romanNumeral.of('M')).toBe(1000);
  });

  it('should return 490 for "CDXC"', () => {
    expect(romanNumeral.of('CDXC')).toBe(490);
  });

  it('should return 1049 for "MXLIX"', () => {
    expect(romanNumeral.of('MXLIX')).toBe(1049);
  });

  it('shoul return 2025 for "MMXXV"', () => {
    expect(romanNumeral.of('MMXXV')).toBe(2025);
  });
});