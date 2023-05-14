const sumAll = function(a, b) {
  if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') {
    return 'ERROR';
  }

  let first,
      last;
  if (a > b) {
    first = b;
    last = a;
  } else {
    first = a;
    last = b;
  }

  let sum = 0;
  for (i = first; i <= last; i++) {
    sum+=i;
  }
  return sum;
};
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
