export class RomanNumeral {
  private readonly values: { [key: string]: number } = {
    I: 1,
    V: 5,
  };

  of(value: string): number {
  if (!(value in this.values)) {
    throw new Error('Not implemented');
  }
  return this.values[value];
}
}