
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