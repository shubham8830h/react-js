// ============================================================================

//  multiple POinter method

// n=6    x=16
// let arr=[1,4,45,6,10,8]
// given arry with pair sum of x number in the given array

let arr = [1, 4, 45, 6, 10, 8];
let n = 6;
let x = 16;

function sumOfEqualToPairs(arr, n, x) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == x) return "Yes";
    }
  }
  return "No";
}
console.log(sumOfEqualToPairs([1, 4, 45, 6, 10, 8], 6, 16));
// in this program time complexity is o(n^2) it is brute force approach

// =========================================================================================================

// its optomise approrach program multiple counter method are use to find pair sum is equal to number
//  but in this approach one condition is the this array is sorted is mandatory
let array = [1, 4, 45, 6, 10, 8];
let No = 6;
let sum = 16;

function pairSum(array, No, sum) {
  let left = 0;
  array.sort();
  let right = array.length - 1;

  while (left < right) {
    if (array[left] + array[right] == sum) {
      return "Yes";
    } else if (array[left] + array[right] < sum) {
      left++;
    } else {
      right--;
    }
  }
  return "no";
}
console.log(pairSum([1, 4, 45, 6, 10, 8], 6, 16));

// ============================================================================================

// Given a sorted array and a number x, find the pair in array whose sum is closest to x

let arr1 = [10, 22, 28, 29, 30, 40];
let sum1 = 54;

function sumfun(arr1, sum1) {
  let l = 0;
  let r = arr1.length - 1;
  let no = Number.MAX_VALUE;

  var a, b;
  while (l < r) {
    let pairSum = arr1[l] + arr1[r];

    let currSum = Math.abs(pairSum - sum1);
    if (currSum < no) {
      no = currSum;
      a = arr1[l];
      b = arr1[r];
    }

    if (arr1[l] + arr1[r] > sum1) {
      r--;
    } else {
      //arr1[i]+arr1[r] <sum1
      l++;
    }
  }
  console.log(a, b);
}
sumfun(arr1, sum1);






// var twoSum = function (nums, target) {
//   nums.sort();
//   let l = 0;
//   let r = nums.length - 1;
//   let a, b;
//   while (l < r) {
//     if (nums[l] + nums[r] == target) {
//       // console.log([l,r])
//       // console.log( [l, r])
     
//     } else if (nums[l] + nums[r] < target) {
//       l++;
//     } else {
//       r--;
//     }
//   }
//   return [a,b]
// };
//  let nums = [2, 7, 11, 15]
//   let target = 9;

// console.log(twoSum(nums,target))



