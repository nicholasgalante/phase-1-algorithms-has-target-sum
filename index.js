


function hasTargetSum(array, target) {
  let index1 = 0;
  while (index1 < array.length) {
    for (index2 = index1 + 1; index2 < array.length; index2++) {
      const sum = array[index1] + array[index2];
      if (sum === target) {
        return true;
      };
    };
    index1++;
  };
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Pseudocode:
    let index = 0;
    while index < array.length:
      for loop: 
      add arr[index] to every following number 
        check sum against target: 
          if sum === target, return true
          else continue
        incremenet index and continue while loop
    While loop completes w/out match: return false
*/

/*
  Written explanation:
    This function takes two arguments, an array and a target, 
    and returns true if any pair of numbers in the arrary adds 
    up to the target number. It does this using a nested for loop
    that checks the sum of the first index against the reminaing,
    the second index against the remaining, and so forth. If any
    of the sums equals the target, it returns true. Otherwise, it
    returns false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("1 Expecting: true");
  console.log("=>", hasTargetSum([1, 4, 5, 1], 2));

  console.log("2 Expecting: false");
  console.log("=>", hasTargetSum([], 10));

  console.log("3 Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("4 Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("5 Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
