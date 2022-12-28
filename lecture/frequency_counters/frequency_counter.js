//frequency couter : it is technique to find how much element present in array and quantity to find to use frequency counter

 // 1) "this is brute force method using solve problem ";

let arr = [1, 3, 2, 1, 1, 2, 3, 4];
let visited = Boolean;
for (let i = 0; i < arr.length; i++) {
  if (visited[i] == true) continue;

  let cout = 1;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      visited[j] = true;
      cout++;
    }
  }
  // in this problems time complexity is the 0(n^2)
  // "this is brute force method using solve problem ";
  console.log(+arr[i] + " " + cout);
}

// ====================================================================================

// To using frequency couter method

// in this problem the time complexity is the 0(n) only
let arr2 = {};
let array = [1, 3, 2, 1, 1, 2, 3, 4, 1, 1];
for (let i of array) {
  if (arr2[i]) {
    arr2[i]++;
  } else {
    arr2[i] = 1;
  }
}

console.log(arr2);

// ==============================================================================

// lets check out two array are present they can check first array values are present in second array squres value present or not check

// this is brut force the time complexity is o(n^2)
let array1 = [1, 2, 3, 4];
let array2 = [1, 4, 9, 16];

function squrearray(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    let result = array2.indexOf(array1[i] ** 2);
    if (result === -1) {
      return false;
    }

    array2.splice(result, 1);
  }
  return true;
}

console.log(squrearray(array1, array2));

// =========================================================================================

// this is outpums soultion in frequency counter method double value present
let array11 = [1, 2, 3];
let array22 = [1, 4, 9];

function arrfun(array11, array22) {
  if (array11.length != array22.length) {
    return false;
  }
  let temp1 = {};
  let temp2 = {};
  for (let i of array11) {
    temp1[i] = (temp1[i] || 0) + 1;
  }
  for (let j of array22) {
    temp2[j] = (temp2[j] || 0) + 1;
  }

  for (let key in temp1) {
    if (!(key ** 2 in temp2)) {
      //in opertor use and check the value are present or not
      return false;
    }
    if (temp2[key ** 2] !== temp1[key]) {
      return false;
    }
  }
  return true;
}

console.log(arrfun(array11, array22));
// T.C ==> O(n)
// S.C ==> O(n)

// ================================================================================

// print the duplicate in array [23,3,2,1,2,4,1] ==>[2,1]

let arr1=[1,2,3,1,1,3,3,4,6]

function frequencyCount(arr1){
let myMap=new Map()

for(let i=0;i<arr1.length;i++){
    if(!myMap.has(arr1[i])){
      myMap.set(arr1[i], 1)
    }else{
      myMap.set(arr1[i],   myMap.get(arr1[i])+1)
    } 
}
  let result=[]
  for(let item of myMap){
    if (item[1] > 1) {    //item[1] write becuse acess to value
      result.push(item[0]); //item[0] write becauce acess to key
    }
  }
  return result
}

console.log(frequencyCount(arr1));



// ===================================================================================
// anagram means the given string how many value present in another string it is all equal in size
//  this time this string is anagram

let arr11 = "hello";
let arr22 = "ollhi";

function anagram(arr11, arr22) {
  const map = new Map();

  for (let i of arr11) {
    if (!map.has(i)) {
      map.set(i, 1);
    } else {
      map.set(i, map.get(i) + 1);
    }
  }

  for (let j of arr22) {
    if (map.has(j)) {
      map.set(j, map.get(j) - 1);
    } else {
      return false;
    }
  }

  console.log(map);
  for (let item of map) {
    if (item[1] != 0) {
      return false;
    }
  }
  return true;
}
console.log(anagram(arr11, arr22));