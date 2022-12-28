
let arr1 = [1, 2, 3, 4];
let value = 2;

function sliding() {
  let sum = 1;
  let maxsum = 0;
  for (let i = 0; i < value; i++) {
    sum = sum * arr1[i];
    
  }
  maxsum = sum;

  for (let j = value; j < arr1.length; j++) {
    sum *= arr1[j];
    sum /= arr1[j - value];
    maxsum = Math.max(maxsum, sum);
  }
  return maxsum;
}
console.log(sliding(arr1, value));