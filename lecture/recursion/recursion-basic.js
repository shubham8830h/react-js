// =========================================================================================================
// to find in using recursion nth faibonacci number
// Recursion is a process of calling itself. A function that calls itself is called a recursive function. The syntax for recursive function is: function recurse() { // function code recurse(); // function code } recurse();

function fabo(x) {
  if (x == 0) {
    return 0;
  } // it is base
  if (x == 1) {
    return 1;
  } //it also base
  let temp1 = fabo(x - 1); //2  //to calling function itself same function
  let temp2 = fabo(x - 2); //to calling function itself same function
  return temp1 + temp2;
}

console.log(fabo(7));
// ===============================================================================================
// sum of n th natural no of to using recursion

function sum(no) {
  if (no == 1) {
    return 1;
  }

  let temp = sum(no - 1); //to calling function itself same function
  return no + temp;
}

console.log(sum(5));
// ==============================================================================================
// to find nth no of factoroal to using recursion

function fact(n) {
  if (n == 1) return 1;
  let temp3 = fact(n - 1);
  return n * temp3;
}

console.log(fact(6));

// ====================================================================================================
n=5   // no 
x=6   //multiple factor
let power=1
for (let i = 0; i < n; i++) {
     power=power*x
  console.log(power)
}
// =========================================================================================
// recursion useing power find

function find(a,b){
if(b==0 ) return 1
let t=find(a,b-1)
return a*t
}
console.log(find(2.000,10))

// =============================================================================

console.log(Math.pow(2.000,10))

// =====================================================================================
// recursion basic program to print no ascending order

let number=10
function no(i,number){
if (i > number) return;

console.log(i);      //this print acending order
no(i + 1, number);
console.log(i);     //this print in decending order
}
no(1, number);

// ===================================================================================

// recursion product of array

function productArr(arr){
  //  base
  if(arr.length == 0) return 1 

  // recusive

  return arr[0] * productArr(arr.slice(1))
}

console.log(productArr([1,2,3,4,5]))