// =====================================================
// this is the simpe apporach of check prime no
let no = 16;

let check = true;

for (let i = 2; i < no; i++) {
  if (no % i == 0) {
    check = false;
    break;
  }
}

if (check == true) {
  console.log("prime");
} else if (check == false) {
  console.log("not prime");
} else {
  //the value less than 1 then alos not prime
  console.log("not prime");
}
// T.C ==> o(n)
// S.C ==> O(1)

// =====================================================================
// prime no to true or not this is optmized way as compared to first problems

let n = 17;
function prime(n) {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}
console.log(prime(n));

// T.C ==> O(sqrt(n))
// S.C ==>O(1)

// =================================================================
//the value n well be puting the can all gives till n value well print all prime no

let no1 = 16;
function isPrime(no) {
  let check = true;

  for (let i = 2; i < no; i++) {
    if (no % i == 0) {
      check = false;
      break;
    }
  }
  if (no <= 1) {
    return false;
  } else if (check == true) {
    return true;
  } else {
    return false;
  }
}
let result=[]
 for (let i = 2; i <=no1; i++) {
    if(isPrime(i)){
      result.push(i)
    }
 }

 console.log(result)

//  T.C ==>O(n*sqrt(n))
// S.C ==>o(n) because we are using array thats why

// ============================================================================


function sieveOfEratosthenes(n) {
  // Create a boolean array
  // "prime[0..n]" and
  // initialize all entries
  // it as true. A value in
  // prime[i] will finally be
  // false if i is Not a
  // prime, else true.
  prime = Array.from({ length: n + 1 }, (_, i) => true);

  for (p = 2; p * p <= n; p++) {
    // If prime[p] is not changed, then it is a
    // prime
    if (prime[p] == true) {
      // Update all multiples of p
      for (i = p * p; i <= n; i += p){
       prime[i] = false;
    }
  }

  }
   let arr=[]
  // Print all prime numbers
  for (i = 2; i <= n; i++) {
    if (prime[i] == true){
      arr.push(i)
    }
  }
  console.log(arr);
}

sieveOfEratosthenes(19)
