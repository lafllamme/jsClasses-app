export function fibAlgo(n) {
  if (n < 1) {
    return 0;
  }

  var a = 0;
  var b = 1;

  for (var i = 1; i < n; ++i) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

export function fib(n) {
  for (var i = 1; i < n; i++) {
    console.log("f(" + i + ")" + "=", fibAlgo(i));
  }
}

//Example: fib O(n)
