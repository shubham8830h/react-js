// merge sort its is soting technicqe 
// merge sort means ex- [1,4,5,2,6,8,7] we can the divide/mid of array [1,4,5] is one and another [2,6,8,7]
//  we can divide or partion to multiple times only one item left in array and after that they can swap value and 
// lowest value swap the value postion well be the first.

//step 1: check which values are less and less value well come first, and one functtion create and which can gives the lowest value first

// step 2: in the step we can use recursion and 

let arr=[10,24,76,73,24,1,2,45,78,24,97,13,89]

function merge(arr1,arr2){
  let result=[]
   let i=0
   let j=0
    
   while(i < arr1.length && j < arr2.length){
      if(arr1[i] < arr2[j]){
          result.push(arr1[i])
          i++
      }
      else{
         result.push(arr2[j])
           j++
      }
   }
   
    while(i < arr1.length){
          result.push(arr1[i]);
          i++;
   }
    while(j < arr2.length){
      result.push(arr2[j])
      j++
   }
 return result
}

// console.log(merge([1,10,50],[2,14,99,100]))

function mergeSort(arr){
     //base case
     if(arr.length <=1 )return arr
     let mid=Math.floor(arr.length/2)
     let left=mergeSort(arr.slice(0,mid))
     let right=mergeSort(arr.slice(mid))
     return merge(left,right)
}
console.log(mergeSort(arr))

// T.C ==> o(nlogn)
// S.C ==> o(nlogn)