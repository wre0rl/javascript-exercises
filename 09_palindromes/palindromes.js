const palindromes = function (str) {
  let res = str.split('!').join('').split(',').join('').split('.').join('').split(' ').join('');
  res = res.toLowerCase();

  if (res === res.split('').reverse().join('')) {
    return true;
  }

  return false;
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

/*
function reverseString(str) {
  let removeComma = str.split(',');
  let toString = removeComma.join('');
  let removeDot = toString.split('.');
  let toString2 = removeDot.join('');
  let removeSpace = toString2.split(' ');
  let result = removeSpace.join('');
  return result.reverse();

  //let split = str.split(',');
  //let reverseArray = split.reverse();
  
  //return reverseArray.join('');
}

console.log(reverseString('A car, a man, a maraca.'));
*/
// Do not edit below this line
module.exports = palindromes;
