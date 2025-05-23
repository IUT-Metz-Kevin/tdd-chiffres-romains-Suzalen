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
});