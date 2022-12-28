// ===================================================================
// 1) given an array like ex arr[1,1,2,22,3,5,11,1,2] ==>[1,2]
// filter out duplicate elements and arr the duplicate value is not present
// this time return -1

let array = [1, 2, 22, 3, 5, 11, 1, 2, 56, 5, 22];
function duplicateArr(array) {
  const mymap = new Map();
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!mymap.has(array[i])) {
      mymap.set(array[i], 1);
    } else {
      mymap.set(array[i], mymap.get(array[i]) + 1);
    }
  }

  for (let x of mymap) {
    if (x[1] > 1) {
      result.push(x[0]);
    }
  }
  if (result.length === 0) return -1;
  return result;
}

console.log(duplicateArr(array));

// ==================================================================================
// 2) find uniqe pairs of element(inside an array whose is equal to a target k

let arr = [7, 2, 4, 6, 9, 11, 34, 3, 2, 1];
let k = 5;
// output is res = [2,3], [4,1]

function uniqePairs(arr, k) {
  const mymap = new Map();
  const myMap1 = new Map();

  for (let i of arr) {
    if (!mymap.has(i)) {
      mymap.set(i, 1);
    } else {
      mymap.set(i, mymap.get(i) + 1);
    }
  }

  for (let key of mymap) {
    let element = k - key[0];
    if (mymap.has(element)) {
      if (!myMap1.has(element)) {
        myMap1.set(key[0], element);
      }
    }
  }
  return myMap1.entries();
}

console.log(uniqePairs(arr, k));

// 2nd type to using for loop also

// let arr = [7, 2, 4, 6, 9, 11, 34, 3, 2, 1];
// let t = 5;
// // output is res = [2,3], [4,1]

// let map = new Map();
// let result = new Map();

// function solution(arr, t) {
//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//     } else {
//       map.set(arr[i], 1);
//     }
//   }

//   for (let pairs of map) {
//     let findEle = t - pairs[0];
//     if (map.has(findEle)) {
//       if (!result.has(findEle)) {
//         result.set(pairs[0], findEle);
//       }
//     }
//   }
//   return result.entries();
// }

// let ans = solution(arr, t);
// console.log(ans);

// ===================================================================================

//4) take an input and check wheather the input is an integer or not

function checkInt(no) {
  let pattren = /^-?[0-9]+$/;
  let result = pattren.test(no);
  return result;
}

// console.log(checkInt(123.34)) //=> false
//  console.log(checkInt ("admisson")) //=> false
// console.log(checkInt([23,34])) //=> false
console.log(checkInt(78)); //=> true

//=======================================================================================

// 3) take a number and if number is multiple of 3 print "foo"
// if number are multiple of 5 print "Bar"
//   if numbers are multiple of both 5 and 7 print "foobar"
// if not a multiple of either print nothing

let number = 15;
function check(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("fooBar");
  } else if (number % 3 == 0) {
    console.log("foo");
  } else if (number % 5 == 0) {
    console.log("Bar");
  }
}
check(number);
