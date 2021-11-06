import { NumberHelper } from "./helpers/number-helper.js";

//Question 1 - Identify the primes in the entered numbers
findPrime(1, 2, 4, 7, 17, 25, 36, 41);

//Question 4 - List the prime numbers between 0 to 1000
findPrimeInRange(0, 1000);

/* Methods */

function findPrimeInRange(min, max) {
  let primeNumbers = [];
  for (let i = min; i < max; i++) {
    if (isPrimeNumber(i)) {
      primeNumbers.push(i);
    }
  }
  console.log("Prime numbers between 0 and 1000: " + primeNumbers);
}

function findPrime(...numbers) {
  let primeNumbers = [];
  numbers.forEach((number) => {
    if (NumberHelper.isNumber(number)) {
      let result = isPrimeNumber(number);
      console.log("Is " + number + " a Prime Number? --> " + result);
      if (result) {
        primeNumbers.push(number);
      }
    }
  });
  console.log(
    "The prime numbers in the numbers you enter are: " + primeNumbers
  );
}

function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
