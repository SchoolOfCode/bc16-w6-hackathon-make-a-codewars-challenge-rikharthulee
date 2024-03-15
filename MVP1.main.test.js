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
