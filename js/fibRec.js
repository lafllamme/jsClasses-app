function recursiveFibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
  }
}

console.log(recursiveFibonacci(5));
// 1 f(1)
// 1 f(2)
// 2 f(3)
// 3
// 5
// 8
// 13
// 21
// 34
