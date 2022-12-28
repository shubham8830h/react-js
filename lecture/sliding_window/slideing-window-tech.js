// ===============================================
// sliding window
function slide(k, arr, n) {
  let sum = 0;
  let maxsum = 0;

  for (let i = 0; i < k; i++) {
    sum = sum + arr[i];
  }
  maxsum = sum;
  for (let i = k; i < n; i++) {
    sum += arr[i];
    sum -= arr[i - k];
    maxsum = Math.max(maxsum, sum);
    // console.log(maxsum)
  }
  return maxsum;
}

let arr = [100, 200, 300, 400, 65, 66, 599];
let k = 2; //window length
let n = arr.length;
console.log(slide(k, arr, n));
//  this problem on sliding window to solve and time complexity is o(n) only

// ===================================================================================================

let arr1 = [1, 2, 3, 4];
let value = 2;

function sliding() {
  let sum = 1;
  let maxsum = 0;
  for (let i = 0; i < value; i++) {
    sum = sum * arr1[i];
    
  }
  maxsum = sum;

  for (let j = value; j < arr1.length; j++) {
    sum *= arr1[j];
    sum /= arr1[j - value];
    maxsum = Math.max(maxsum, sum);
  }
  return maxsum;
}
console.log(sliding(arr1, value));

// findMaxProduct(arr,n,k){
//      //code here

//      let prod=1
//      let prodt=0
//      for(let i=0;i<k;i++){
//          prod *=arr[i]
//      }
//      prodt=prod
//      for(let j=k;j<n;j++){
//          prod *=arr[j]
//          prod /=arr[j-k]
//          prodt=Math.max(prod,prodt)
//      }
//      return prodt

//   }
// ===================================================================================================================================

// Largest sum of contiguous sub-array
// Given an array of integers A, find the largest sum of contiguous elements in sub-array of an array.

// Input
//     5
//     -20 -12 42 -10 25

//     Where,   

// The first line represents the size of an array.
// The second line represents array elements.

// Output
//     57

// Here largest sub-array sum = 42 + (-10) + 25 = 57.

function solution(a, arr2) {
  //Write your solution here
  let maxsum = -Infinity;
  let sum = 0;

  for (let i = 0; i < a; i++) {
    sum += arr2[i];

    if (sum > maxsum) {
      maxsum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxsum;
}

var arr2 = [-20, -12, 42, -10, 25];
var a = arr2.length;
var res = solution(a, arr2);
console.log(res);
