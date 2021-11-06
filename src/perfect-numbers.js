import { NumberHelper } from "./helpers/number-helper.js";

//Question 3 - List the perfect numbers between 0 to 1000
findPerfectNumberInRange(0, 1000);

/* Methods */

function findPerfectNumberInRange(min, max) {
  for (let i = min; i < max; i++) {
    if (isPerfectNumber(i)) {
      console.log(i + " is perfect number");
    }
  }
}

function isPerfectNumber(number) {
  if (number < 1) {
    return false;
  }
  if (
    NumberHelper.calculateExactDivisors(number).reduce(
      (sum, divisor) => sum + divisor,
      0
    ) == number
  ) {
    return true;
  }
  return false;
}
