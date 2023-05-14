const convertToCelsius = function(f) {
  const formula = (f - 32) * 5/9;
  return round(formula);

};

const convertToFahrenheit = function(c) {
  const formula = (c * 9/5) + 32;
  return round(formula);
};

function round(num) {
  return Math.round(num * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
