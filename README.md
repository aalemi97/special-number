# Orpyx Coding Exercise

Using node.js (v20), write a program that finds the smallest positive integer that when represented in base 10, moving the least significant digit to become the most significant digit, the new integer is exactly triple the original integer. For example, 14 becomes 41 which is close to triple but not exact. Another close example is 103 becoming 310, again very close to triple but not exact. The program must complete in less than 5 seconds on a modern laptop, printing the integer to the console. Please submit one node.js source file. We should be able to execute your code as follows:

`node main.js`

# Solution

Consider a number, A<sub>N</sub>, which is an (n + 1) digit number defined as:

A<sub>N</sub> = a<sub>n</sub>a<sub>n-1</sub>a<sub>n-2</sub> ... a<sub>1</sub>a<sub>0</sub>

We aim to find such a number that satisfies the equation:

3 x a<sub>n</sub>a<sub>n-1</sub>a<sub>n-2</sub> ... a<sub>1</sub>a<sub>0</sub> = a<sub>0</sub>a<sub>n</sub>a<sub>n-1</sub>a<sub>n-2</sub> ... a<sub>1</sub>

Expressing both sides in base 10 gives:

3 x (10<sup>n</sup>a<sub>n</sub> + 10<sup>n-1</sup>a<sub>n-1</sub> + 10<sup>n-2</sup>a<sub>n-2</sub> + ... 10a<sub>1</sub> + a<sub>0</sub>) = 10<sup>n</sup>a<sub>0</sub> + 10<sup>n-1</sup>a<sub>n</sub> + 10<sup>n-2</sup>a<sub>n-1</sub> + 10<sup>n-3</sup>a<sub>n-2</sub> ... a<sub>1</sub>

Simplifying both sides

30x10<sup>n-1</sup>a<sub>n</sub> + 30x10<sup>n-2</sup>a<sub>n-1</sub> + 30x10<sup>n-3</sup>a<sub>n-2</sub> + ... 30a<sub>1</sub> + 3a<sub>0</sub> = 10<sup>n</sup>a<sub>0</sub> + 10<sup>n - 1</sup>a<sub>n</sub> + 10<sup>n-2</sup>a<sub>n-1</sub> + 10<sup>n-3</sup>a<sub>n-2</sub> ... a<sub>1</sub>

Now, subtract the two sides:

29x(10<sup>n - 1</sup>a<sub>n</sub> + 10<sup>n-2</sup>a<sub>n-1</sub> + 10<sup>n-3</sup>a<sub>n-2</sub> ... a<sub>1</sub>) = (10<sup>n</sup> - 3)a<sub>0</sub>

Finally:

29x(a<sub>n</sub>a<sub>n-1</sub>a<sub>n-2</sub> ... a<sub>1</sub>) = (10<sup>n</sup> - 3)a<sub>0</sub>

This shows that the right-hand side must be divisible by 29. Since a<sub>0</sub> is between 1 and 9 and cannot be divisible by 29, it follows that (10<sup>n</sup> - 3) must be divisible by 29. The smallest such n is 27. The `findDigits` function identifies this n, allowing us to calculate a<sub>n</sub>a<sub>n-1</sub>a<sub>n-2</sub> ... a<sub>1</sub> and then calculate A<sub>N</sub>.