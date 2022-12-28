// ========================================================
// search The searching algorithms are used to search or find one or more than one element from a dataset. These type of algorithms are used to find elements from a specific data structures.

// Searching may be sequential or not. If the data in the dataset are random, then we need to use sequential searching. Otherwise we can use other different techniques to reduce the complexity.

//  1 type of searching is linear search

// in this array they can acess one element to useing linear search
let arr1 = [1, 3, 2, 87, 45, 75, 56, 88, 76, 49, 98];
let acessEle = 76;

function searchingElement(arr1,acessEle){
    
  // for(let i=0;i<arr.length;i++){
  //   if(arr[i] === acessEle) return i

  // }
  //  return -1

  // to using while loop also
     let i=0
  while(i<arr1.length){
     if(arr1[i] === acessEle) return i
        i++
  }
  return -1
}

console.log(searchingElement(arr1,acessEle))

// time complexity of code ==>    o(n)
//  space complexity of code ==>  o(1)

// ============================================================================================

// 2ND  type of searching is Bineary searching

//  in this bineary searching we can use the divde and conuer method can use and it,s time complexity also less as compare to linear search
// note ==> we can only use sorting element

// 1)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 19, 29, 39];
let elem = 16;

function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

console.log(binarySearch(arr,elem))

// ===================================================
// 2)


 const func = () => {
   let arr = [1, 2, 3, 4, 5, 5, 6, 7];
   let target = 6;
   let low = 0;
   let high = arr.length - 1;
   let mid;

   while (low <= high) {
     mid = Math.floor(low + (high - low) / 2);

     if (arr[mid] == target) {
       return mid;
     } else if (arr[mid] < target) {
       low = mid + 1;
     } else {
       high = mid - 1;
     }
   }
 };


//  3)
// given a sorted array which mid contain some repeating elements, //target .
//     find out starting and ending index of the target.
    
 let array1 = [1,4,5,6,7,7,7,8,9,9];
 let target = 7
 //4,6
 
//   let arr2 = [1,4,5,6,7,7,7,8,9,9];
//  let target2 = 3
//  //-1,-1
 
//   let arr3 = [1,4,5,6,7,8,9,9];
//  let target3 = 7
 //4,4
 
 const function1 = (arr, target) => {
     let n = arr.length;
     let low = 0;
     let high = n-1;
     let mid;
     let leftOcc = -1;
     let rightOcc = -1;
     
     // [1,4,5,6,7,7,7,7,7,7,8,9,9]
     while(low<=high){
         mid = Math.floor(low+(high-low)/2);
         
         if(arr[mid] == target)
          { 
              leftOcc = mid;
              high = mid-1;
          }
            
         else if(arr[mid] < target)
         {
             low = mid+1;
         }
         else {
             high = mid -1;
         }
     }
     
     low = 0;
     high = n-1;
     
     while(low<=high){
         mid = Math.floor(low+(high-low)/2);
         
         if(arr[mid] == target)
          { 
              rightOcc = mid;
              low = mid+1;
          }
            
         else if(arr[mid] < target)
         {
             low = mid+1;
         }
         else {
             high = mid -1;
         }
     }
     
     console.log(leftOcc, rightOcc);
 }
 
 function1(array1, target);
//  TC : O(logn)
//  SC: O(1)


