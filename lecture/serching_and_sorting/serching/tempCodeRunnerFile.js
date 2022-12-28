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


