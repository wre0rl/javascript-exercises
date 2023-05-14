const removeFromArray = function(arr, ...index) {
  const listOfIndex = [...index];
  const result = [...arr];

  for (let i = 0; i < listOfIndex.length; i++) {
    for (let x = 0; x < arr.length; x++) {
      if(listOfIndex[i] === arr[x]) {
        result.splice(result.indexOf(arr[x]), 1);
      }
    }
  }

  return result;
};

//console.log(removeFromArray([1, 2, 3], "1", 3));
//console.log(removeFromArray(["hey", 2, 3, "ho"], "hey", 3));
console.log(removeFromArray(["a", "b", "c", "d"], "a", "b"));

// Do not edit below this line
module.exports = removeFromArray;
