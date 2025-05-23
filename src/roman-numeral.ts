export class RomanNumeral {
  of(value: string): number {
    if (value === 'I') return 1;
    throw new Error('Not implemented');
  }
}