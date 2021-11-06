import { NumberHelper } from "./helpers/number-helper.js";

//Question 2 - Detect if two entered numbers are friend numbers
areFriendNumbers(18655744, 19154336);
areFriendNumbers(20, 30);

/* Methods */

function areFriendNumbers(number1, number2) {
  if (
    NumberHelper.isNumber(number1) &&
    NumberHelper.isNumber(number2) &&
    number1 != number2 &&
    number1 > 0 &&
    number2 > 0
  ) {
    if (
      NumberHelper.calculateExactDivisors(number1).reduce(
        (sum, divisor) => sum + divisor,
        0
      ) == number2 &&
      NumberHelper.calculateExactDivisors(number2).reduce(
        (sum, divisor) => sum + divisor,
        0
      ) == number1
    ) {
      console.log(number1 + "-" + number2 + " -> are friend numbers");
    } else {
      console.log(number1 + "-" + number2 + " -> are not friend numbers");
    }
  }
  return false;
}
