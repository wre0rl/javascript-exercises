const fibonacci = function(index) {
  index = parseInt(index);
  if (index < 0) {
    return 'OOPS';
  }

  let previousValue = 0;
  let nextValue = 1;
  let sum = 1;

  const fib = [];
  for (let i = 0; i < 25; i++) {
    fib.push(sum);
    sum = previousValue + nextValue;
    previousValue = nextValue;
    nextValue = sum;
  }

  const result = fib[index-1];
  return result;
};

/*
0 1 1
1 1 2
1 2 3
2 3 5
3 5 8
5 8 13
*/

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
