const leapYears = function(year) {
  /*
    if year % 4 = 0 && year % 100 = 0 true && year % 400 = 0, leap year return true
    else, not leap year return false
  */

  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(leapYears(1800));

// Do not edit below this line
module.exports = leapYears;
