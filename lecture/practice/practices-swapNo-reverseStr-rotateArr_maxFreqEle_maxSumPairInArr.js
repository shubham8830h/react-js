// ========================================================
// 1) swap the two numbers without 3rd varible
// ===================
// not allowed
// temp=a
// a=b
// b=a
// ===================
let a = 10;
let b = 56;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);

// ===================================================================================

// swap 2 string whithot using 3 rd varible

let x = "hello";
let y = "word";

x = x + y;
y=x.slice(0, -y.length)
x=x.slice(y.length)

console.log(x,y);
// console.log(y);

// ==========================================================================================

//  1st method
// 2) reverse array whithout using new array
let arr = [1, 2, 3, 4, 5, 67];


let l = 0;
let r = arr.length - 1;

while (l < r) {
  let temp = arr[l];
   arr[l] = arr[r];
   arr[r]= temp;
  l++;
  r--;
}

console.log(arr);


// 2nd type
let arr1 = [1, 2, 3, 4, 5, 67,44];

function reverese(arr1){

  let i=0
  let j=arr1.length-1

  while(i<j){
    arr1[i]=arr1[i] + arr1[j]

    arr1[j]=arr1[i] - arr1[j]
    arr1[i]=arr1[i] - arr1[j]
    i++
    j--
  }

  return arr1
}
console.log(reverese(arr1))


// ==========================================================================

// 3) write a js program to rotate array in k postion elment rotated

let arr2=[1,2,3,4,5,6]  //  ==> [5,6,1,2,3,4]
let k=2
function reverse(arr2,k){
     k %= arr2.length; 
  let l=0
  let r=arr2.length-1
  revereseKTimes(arr2,l,r)  // all array are reverse
  revereseKTimes(arr2, l, k-1);   //first k-1 element are reverse 
  revereseKTimes(arr2, k, r);   //last element are reverse
  return arr2

}

function revereseKTimes(arr1,l,r){

while(l<r){
   arr1[l] = arr1[l] + arr1[r];

   arr1[r] = arr1[l] - arr1[r];
   arr1[l] = arr1[l] - arr1[r];
   l++;
   r--;
  }
}

console.log(reverse(arr2, k));

// ===================================================================================

// 5) given  an array of repeated elements return most repeated element from the array

// [23,2,2,2,3,4,5,6,7,5,6,4,43] ==> most frequect element is 2


 let array = [23,2,3,2,1,3,14,11,4,3,44,49,3];

 function mostFrequentElement(array){
       const mymap=new Map()

      for(let i=0;i<array.length;i++){
        if(!mymap.has(array[i])){
            mymap.set(array[i],1)
        }else{
          mymap.set(array[i], mymap.get(array[i])+1)
        }
     }
    
     let maxCount=0
     let res=-1
  //  console.log(mymap);
    for(let j of mymap){
      if (maxCount < j[1]) //j[1] value
      res = j[0];         //j[0] key
       maxCount=j[1]
    }
    return res

 }

 console.log(mostFrequentElement(array));

// =================================================================================
// find the maximum sum of of any two elements in an array finding the largest and secondlargest elemant in array

// let array11=[12,4,67,2,34,45,45]  //67+34 ==>112

// function findLargest(array11){
   
//     let first
//     let second
    
//     if(array11[0] < array11[1]){
//         first=array11[1]
//         second=array11[0]
//     }else{
//        first=array11[0]
//        second=array11[1]
//     } 
//    for(let i=2;i<array11.length;i++){
//       if(array11[i] > first){
//           second=first
//           first=array11[i]
//     }else if(array11[i] > second && array11[i] != first){
//          second=array11[i]
//     }

//    }
//     return(first + second)
// }

// console.log(findLargest(array11))


// 4) 2nd way to to find largest sum and secound largest sum

let array11=[12,4,67,2,34,45,45]  //67+34 ==>101

function largestSum(array11){
   let max=-1
   let smax=0

   for(let i=0;i<array11.length-1;i++){
    if(array11[i] > max ){
       smax=max
       max=array11[i]
    }
    else if(array11[i] >  smax){
       smax=array11[i]
    }
   }
   return (max+smax)
}

console.log(largestSum(array11));

// 3 way or slight change three maximum no find in array
let arr3=[1,2,3,45,67,89,3,4,65,67]  // 89+67+65

function maximumFind(arr3){
   
  let max=0
  let smax=0
  let tmax=0

  for(let i=0;i<arr3.length-1;i++){
    
    if(arr3[i] > max){
          tmax=smax 
          smax=max
          max=arr3[i]
    }
    else if(arr3[i] > smax){
      tmax=smax
      smax=arr3[i]
    }else if(arr3[i] > tmax){
      tmax=arr3[i]
    }
  }
  return (max+smax+tmax)
}

console.log(maximumFind(arr3));
