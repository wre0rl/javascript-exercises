const repeatString = function(str, x) {
  // Repeat str, x times
  let combined = '';
  for (let i = 0; i < x; i++) {
    combined += str;
  }

  return combined;
};

// Do not edit below this line
module.exports = repeatString;
