let arr=[8,9,1,2,3,4]
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
  console.log(rotatedSorted(arr))