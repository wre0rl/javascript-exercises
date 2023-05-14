const repeatString = function(str, x) {
  // Repeat str, x times
  if (x < 0) {
    return 'ERROR';
  }

  let combined = '';
  for (let i = 0; i < x; i++) {
    combined += str;
  }

  return combined;
};

// Do not edit below this line
module.exports = repeatString;
