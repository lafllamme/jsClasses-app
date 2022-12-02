class Fibonacci {
  constructor() {
    this.values = [0, 1];
  }

  fibAlgo(n) {
    if (n in this.values) {
      return this.values[n];
    }

    let a = this.values[this.values.length - 2];
    let b = this.values[this.values.length - 1];

    for (var i = this.values.length; i <= n; ++i) {
      var c = a + b;
      a = b;
      b = c;
      this.values.push(c);
    }
    return this.values[n];
  }

  calculate = (n) => {
    for (var i = 1; i < n; i++) {
      console.log("f(" + i + ")" + "=", this.fibAlgo(i));
    }
    //Example: fib O(n)
  };
}

export { Fibonacci };
