let calc = 0;

function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calc++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciMaster2(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[n - 1] + arr[n - 2]);
  }
  return arr.pop();
}

const fasterFib = fibonacciMaster();

console.log("DP", fasterFib(100));
console.log("cals", calc);
