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
