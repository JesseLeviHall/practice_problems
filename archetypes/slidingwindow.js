/* 
Sliding Window: creating a wondow which can either be an array or number from one position to another depending on a certain condition, the wondow either increases or closes ( and a new window is created). Very useful for keeping track of a subset of data in an array/sting etc. 
EX: find longest set of unique characters in a string, or calculate the max sum of a certain number of elements in an array. 
*/

/* 
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. 
*/

//Niave Solution: O(N^2)
function maxSubarraySum(arr, num) {
  if (num > arr.lenth) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

//Refactored Solution: O(N)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
