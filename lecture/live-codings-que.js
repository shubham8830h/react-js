// https://leetcode.com/problems/maximum-subarray/solutions/20489/o-n-time-with-o-1-space-in-6-loc-using-kadane-s-algorithm/?languageTags=javascript

// 53. Maximum Subarray
// Given an integer array nums, find the
// subarray
//  which has the largest sum and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// var maxSubArray = function (nums) {
//   let maxsum = nums[0];
//   let maxsum2 = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     maxsum = Math.max(nums[i], maxsum + nums[i]);
//     maxsum2 = Math.max(maxsum, maxsum2);
//   }
//   return maxsum2;
// };
// console.log(maxSubArray(nums));
// This is O(N) in time complexity.

// 2nd way also
const maxSubArray = (nums) => {
  let sum=0
  let maxSum=nums[0]

  for(let i=0;i<nums.length;i++){

    sum +=nums[i]
    if(sum >maxSum){
      maxSum=sum
    }
    if(sum <0){
      sum=0
    }

  }
  return maxSum
};
console.log(maxSubArray(nums));




// =========================================================================

// mergeSort

// let arr1=[1,2,3,4]

let arr = [10, 24, 76, 73, 24, 1, 2, 45, 78, 24, 97, 13, 89];

function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// console.log(merge([1,10,50],[2,14,99,100]))

function mergeSort(arr) {
  //base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
console.log(mergeSort(arr));

// =========================================================

// 153. Find Minimum in Rotated Sorted Array
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
let arr1=[8,9,1,2,3,4]
  function rotatedSorted(arr){
     let i=0
    let j=arr.length-1
    let mid
       while(i < j){
        mid=Math.floor(i+(j-i)/2)
         if(arr[mid] >arr[j]){
             i=mid+1
         }else{
            j=mid
         }
       }
       return arr[i]
  }
  console.log(rotatedSorted(arr1))


  // ========================================================
 
    // 153. Find Minimum in Rotated Sorted Array

//     Input: nums = [3,4,5,1,2]
       // Output: 1
       // Explanation: The original array was [1,2,3,4,5] rotated 3 times.

      var findMin = function (nums) {
        let l = 0;
        let h = nums.length - 1;
        let mid;
        while (l < h) {
          mid = Math.floor(l + (h - l) / 2);
          if (nums[mid] > nums[h]) {
            l = mid + 1;
          } else {
            h = mid;
          }
        }
        return nums[l];
      };














  // ====================================================
// 154. Find Minimum in Rotated Sorted Array II
var findMin = function (nums) {
  let s = 0;
  let e = nums.length - 1;
  let mid;

  while (s < e) {
    mid = Math.floor(s + (e - s) / 2);

    if (nums[mid] > nums[e]) {
      s = mid + 1;
    } else if (nums[mid] < nums[e]) {
      e = mid;
    } else {
      e--;
    }
  }
  return nums[s];
};

