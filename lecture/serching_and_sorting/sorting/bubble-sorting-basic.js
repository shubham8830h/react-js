// ===================================================================================
// sorting bubble sort it is the swap the postion which one is higest/lowest value
//  works on the repeatedly swapping of adjacent elements until they are not in the intended order

// step 1 ==> its using two loop
// step 2 ==> to swap the element

let arr=[12,3,4,56,2,45,6,89]

function bubbleSort(arr){
   let Boolean
  for(let i=arr.length; i>0 ;i--){
    Boolean=true
    for(let j=0; j<i-1; j++){
          if(arr[j] > arr[j+1]){
           arr[j]= arr[j] +arr[j+1]
           arr[j+1] = arr[j] - arr[j + 1];
           arr[j] = arr[j] - arr[j + 1];
            Boolean = false;
        }
    }
    if (Boolean) {
      break
    }
  }
return arr
}
console.log(bubbleSort(arr));

// T.C ==> O(n^2)     wrost case
// T.C ==>O(n)       best case and to using boolean value to break the code and allready sorted array
// S.C ==> O(n)


