// Write your test here
import { test } from '../../../../.cache/deno/npm/registry.npmjs.org/@vitest/runner/1.6.1/dist/index.d.ts';
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

});