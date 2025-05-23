export class RomanNumeral {
  private readonly values: { [key: string]: number } = {
    I: 1,
    V: 5,
  };

  of(value: string): number {
    let result = 0;
    for (const char of value) {
      if (!(char in this.values)) {
        throw new Error('Not implemented');
      }
      result += this.values[char];
    }
    return result;
  }
}