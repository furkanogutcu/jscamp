export class NumberHelper {
  static calculateExactDivisors(number) {
    if (number < 2) {
      return [];
    }
    let exactDivisors = [1];
    let sqrtOfNumber = Math.sqrt(number);
    for (let i = 2; i < sqrtOfNumber; i++) {
      if (number % i == 0) {
        exactDivisors.push(i);
        exactDivisors.push(number / i);
      }
    }
    if (number % sqrtOfNumber == 0) {
      exactDivisors.push(sqrtOfNumber);
    }
    return exactDivisors;
  }

  static isNumber(input) {
    if (typeof input === "number") {
      return true;
    }
    return false;
  }
}
