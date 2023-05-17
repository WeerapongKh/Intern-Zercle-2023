function nextInLine(arr, item) {
  // Your code here

  var queue = arr.push(item);

  var removeItem = arr.shift();

  return removeItem;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));