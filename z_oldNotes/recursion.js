//=================================================================================================//
// CARTESIAN PRODUCT
//=================================================================================================//
// Generating combinations from n arrays with m elements
// Usage cartesian([[0,1], [0,1,2,3], [0,1,2]])


function allPossibleCases(arr) {
  if (arr.length === 0) {
    return [];
  }
  else if (arr.length === 1) {
    return arr[0];
  }
  else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
    for (var c in allCasesOfRest) {
      for (var i = 0; i < arr[0].length; i++) {
        result.push(arr[0][i] + allCasesOfRest[c]);
      }
    }
    return result;
  }

}