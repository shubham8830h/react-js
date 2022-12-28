// ====================================================================
// Given an integer array of only 0 and 1, segregate them.
// all 0 should be on left side and all 1 should be on right side

let arr = [0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1];

const segregate = (arr) => {
  let n = arr.length;
  let left = 0;
  let right = n - 1;

  while (left <= right) {
    while (arr[left] == 0 ) {
      left++;
    }

    while (arr[right] == 1) {
      right--;
    }

    if (left < right) {
      arr[left] = 0;
      arr[right] = 1;
      left++;
      right--;
    }
  }

  console.log(arr);
};

segregate(arr);

// TC: O(n);
// SC: O(1);

// =====================================================================================

// Dutch National Flag problem

let arr1 = [0, 1, 1, 2, 1, 0, 2, 1, 0];

//1. arr.sort(a,b=>a-b);
//2. freq of 0,1,2  -> TC: O(n)+o(n)
//3.

const func = (arr1) => {
  let n = arr1.length;
  let left = 0;
  let right = n - 1;
  let mid = 0;
  let temp;

  while (mid <= right) {
    if (arr1[mid] == 0) {
      temp = arr1[mid];
      arr1[mid] = arr1[left];
      arr1[left] = temp;
      left++;
      mid++;
    } else if (arr1[mid] == 2) {
      temp = arr1[mid];
      arr1[mid] = arr1[right];
      arr1[right] = temp;
      right--;
    } else mid++;
  }
     console.log(arr1);
};
//TC : O(n)
//SC : O(1)
func(arr1);

// =========================================================================
// There is an integer array nums sorted in ascending order (with distinct values).
  //Search in Rotated Sorted Array

let arr11 = [8, 9, 1, 2, 3, 4, 5, 7]; //sorted array after rotation
let target = 3;

function findIndex(arr11, target) {
  let low = 0;
  let high = arr11.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);

    if (arr11[mid] == target) {
      return true;
    }
     else if (arr11[low] <= arr11[mid]) {
      if (target < arr11[mid] && target >= arr11[low]) {
        high = mid - 1;
      } 
      else {
        low = mid + 1;
      }
    }
     else if (arr11[mid] <= arr11[high]) {
      if (target > arr11[mid] && target <= arr11[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
}
console.log(findIndex(arr11, target));




// =====================================================================
// Search in Rotated Sorted Array II
// leet code problem
let array = [1, 0, 1, 1, 1];
let target1 = 0;

function toFindNo(array,target){
  let low=0
  let high=array.length-1
  let mid

   while(low <=high){
      mid=Math.floor(low+(high-low)/2)

      if(array[mid]==target1) return mid

      else if(array[low] < array[mid] || array[mid] > array[high]){
            if(target < array[mid] && target <=array[low] ){
               high=mid-1
            }
            else{
              low=mid+1
            }
      }
      else if(array[mid] < array[high] || array[mid] < array[low]){
              if(target > array[mid] && target >= array[high]){
                low=mid+1
              }else{

                high=mid-1
              }
      }else{
        // arr[low] === arr[high] === arr[mid]

        high--;
      }
   }
   return false
}

console.log(toFindNo(array,target1));

