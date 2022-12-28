// quickSort is process to sort element 
//step 1 one function well be create swap
//step 2 (1)pivout value well be decalred  (2)swapIndex well be decalred 

function pivout(arr,start=0,end=arr.length){

  function swap(arr,i,j){
      let temp=arr[i]
      arr[i]=arr[j]
      arr[j]=temp
  }
  let pivoutNo=arr[start]
  let swapIndex=start

  for(let i=start+1;i<=end;i++){
    if(pivoutNo > arr[i]){
      swapIndex++
      swap(arr, swapIndex, i);
    }
  }
  swap(arr,start,swapIndex)
  return swapIndex

}

//to using recursion
function quickSort(arr,left=0,right=arr.length-1){
 //base condtion
 if(left < right){
  let pivoutIndex=pivout(arr,left,right)
  //right
  quickSort(arr,left,pivoutIndex-1)
  //left
  quickSort(arr,pivoutIndex+1,right)

 }
 return arr

}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3,2,5,7,46,3]));



// T.C ==> O(n^2)   worst
// T.C ==> O(n logn)  Best and average

// S.C ==> O(log n)

function quick(arr1, start = 0, end = arr1.length) {
  function swap(arr1, i, j) {
    let temp = arr1[i];
    arr1[i] = arr1[j];
    arr1[j] = temp;
  }

  let pivout = arr1[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivout > arr1[i]) {
      swapIndex++;
      swap(arr1, swapIndex, i);
    }
  }
  swap(arr1, start, swapIndex);
  return swapIndex;
}

// recusion
function quicksort1(arr1, start1 = 0, end1 = arr1.length - 1) {
  if (start1 < end1) {
    let pivote = quick(arr1, start1, end1);
    quicksort1(arr1, start1, pivote - 1);
    quicksort1(arr1, pivote + 1, end1);
  }
  return arr1;
}

console.log(quicksort1([499, 45, 2, 1, 678, 7, 6, 3, 2, 5, 7, 46, 3]));






