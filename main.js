/**
 * Hello challenger! Your task is to write a function to determine how many briefcases are required to hold a given currency
 *
 * Assuming all US$100 bills, an average-sized briefcase (25" x 18" x 4") can fit US$2,400,000.
 *
 * How many briefcases do we need!
 */

// example of function used to pass the test
export function howManyCases(number) {
  // create a variable for how many $100 dollar bills fit in a case
  const fullCase = 2400000;
  // number divided by 2400000
  return number / fullCase;
}

export function howManyWholeCases(number) {
  // create a variable for how many $100 dollar bills fit in a case
  const fullCase = 2400000;
  // number divided by fullCase
  const answer = number / fullCase;
  return Math.ceil(answer);
}
