# How many briefcases?

This is the app no one knew they needed, until now!

You are tasked to write a function to determine how many briefcases are required to hold a given currency.

---

## Required Information / Brainstorming

- The currency is US Dollars, in $100 dollar bills
- The volume of the briefcase provided is (25" x 18" x 4")
- Assuming all US$100 bills, an average-sized briefcase (25" x 18" x 4") could theoretically fit about US$2,400,000.

- Rough workings / proof of concept

- 0.00075 per bill \_ $2,400,000 / 1800 = 1 briefcase
- 0.00075 per bill \_ $500,000,000 / 1800 = x briefcase

---

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## MVP1

$2,400,000 fits in one briefcase, in $100 bills. How many briefcases are required to hold a given amount of currency?

Example of tests

```js
import { test, expect } from "vitest";
import { howManyCases } from "./main.js";

test("Test should fail - initial test", () => {});

test("should return 1 case when given $2,400,000", () => {
  const expected = 1;
  const actual = howManyCases(2400000);
  expect(actual).toBe(expected);
});

test("should return 2 cases when given $4,800,000", () => {
  const expected = 2;
  const actual = howManyCases(4800000);
  expect(actual).toBe(expected);
});
```

Example of function used to pass the test

```js
export function howManyCases(number) {
  // create a variable for how many $100 dollar bills fit in a case
  const fullCase = 2400000;
  // number divided by 2400000
  return number / fullCase;
}
```

---

## MVP2

$2,400,000 fits in one briefcase, in $100 bills. How many briefcases are required to hold a given amount of currency?
The result must be in whole briefcases

Example of tests

```js
import { test, expect } from "vitest";
import { howManyWholeCases } from "./main.js";

test("should return 1 case when given $2,400,000", () => {
  const expected = 1;
  const actual = howManyWholeCases(2400000);
  expect(actual).toBe(expected);
});

test("should return 2 cases when given $4,800,000", () => {
  const expected = 2;
  const actual = howManyWholeCases(4800000);
  expect(actual).toBe(expected);
});

// boundary testing $1 under $2,400,000
test("should return 1 case when given $2,399,999", () => {
  const expected = 1;
  const actual = howManyWholeCases(2399999);
  expect(actual).toBe(expected);
});

// boundary testing $1 over $2,400,000
test("should return 2 cases when given $2,400,001", () => {
  const expected = 2;
  const actual = howManyWholeCases(2400001);
  expect(actual).toBe(expected);
});
```

---

Example of first function written to attempt the problem

```js
export function howManyWholeCases(number) {
  // create a variable for how many $100 dollar bills fit in a case
  const fullCase = 2400000;
  // number divided by fullCase
  const answer = number / fullCase;
  return Math.round(answer);
}
```

This fails as it rounds to nearest integer - need to always round up

---

Example of function that passes the test

```js
export function howManyWholeCases(number) {
  // create a variable for how many $100 dollar bills fit in a case
  const fullCase = 2400000;
  // number divided by fullCase
  const answer = number / fullCase;
  return Math.ceil(answer);
}
```
