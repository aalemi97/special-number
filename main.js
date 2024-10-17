/**
 * Returns the value of a base expression taken to a specified power.
 * @param {number} x The base value of the expression.
 * @param {number} y The exponent value of the expression.
 * @returns {BigInt} The result of base^exp as a BigInt.
 */
function pow(x, y) {
  return BigInt(x) ** BigInt(y);
}

/**
 * Finds the smallest n such that (10^n - 3) is divisible by 29.
 * @returns {number} The smallest value of n.
 */
function findDigits() {
  const r = BigInt(3);
  const q = BigInt(29);
  let n = 1;
  while (pow(10, n) % q !== r) {
    n += 1;
  }
  return n;
}

/**
 * Finds and logs the special number that satisfies the given equation.
 * @returns {BigInt} The smallest value of A_N.
 */
function findSpecialNumber() {
  const r = BigInt(3);
  const q = BigInt(29);
  const n = findDigits();
  const a = (pow(10, n) - r) / q;

  for (let i = 1; i < 10; i++) {
    const num = a * BigInt(i);
    const numC = num * BigInt(10) + BigInt(i);
    if (numC < pow(10, n)) {
      continue;
    }
    const numR = pow(10, n) * BigInt(i) + num;
    if (BigInt(3) * numC === numR) {
      return numC;
    }
  }
}

const number = findSpecialNumber();
console.log(number);
