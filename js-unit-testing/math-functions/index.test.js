import { add, divide, multiply, subtract } from ".";

// Test for addition
test("test 4 + 3 = 7", () => {
  expect(add(4, 3)).toBe(7);
});

test("test 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("test -15 + 5 less than 0", () => {
  expect(add(-15, 5)).toBeLessThan(-5);
});

test("test 0.1 + 0.2 close to 0.3", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

// test for substraction

test("expect 15 - 5 to be 10", () => {
  expect(subtract(15, 5)).toBe(10);
});

test("expects 5 - 10 to be less than 0", () => {
  expect(subtract(5, 10)).toBeLessThan(0);
});

// tests for multiply

test("Expects 2 * 4 to be 8", () => {
  expect(multiply(2, 4)).toBe(8);
});

test("Expects -4 * 4 to be less than 0", () => {
  expect(multiply(-4, 4)).toBeLessThan(0);
});

test("Expects 3 * -2 to be less than 0", () => {
  expect(multiply(3, -2)).toBeLessThan(0);
});

test("Expects -3 * -2 to be greater than 0", () => {
  expect(multiply(-3, -2)).toBeGreaterThan(0);
});

// test for divide

test("expects 9 / 3 to be 3", () => {
  expect(divide(9, 3)).toBe(3);
});

test("expects if second argument is 0 result to be 'You should not do this!'", () => {
  expect(divide(4, 0)).toBe("You should not do this!");
});
