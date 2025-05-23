export class RomanNumeral {
  private readonly values: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  of(value: string): number {
  let result = 0;
  for (let i = 0; i < value.length; i++) {
    if (!(value[i] in this.values)) {
      throw new Error('Not implemented');
    }
    const current = this.values[value[i]];
    const next = i + 1 < value.length && (value[i + 1] in this.values) ? this.values[value[i + 1]] : 0;
    if (next > current) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}
}